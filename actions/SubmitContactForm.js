"use server";

import Connection from "@/lib/Connection";
import Contact from "@/lib/ContactSchema";
import sendEmail from "@/lib/sendEmail";

const { z } = require("zod");

// Define validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  companyName: z.string().min(1, "Company name is required"),
  companySize: z.string().optional(),
  services: z.array(z.string()).min(1, "At least one service must be selected"),
  budgetRange: z.string().min(1, "Budget range is required"),
  isFirstPentest: z.boolean(),
  message: z.string().optional(),
  subscribe: z.boolean(),
});

// Form submission function
async function SubmitContactForm(formData) {
  const result = formSchema.safeParse(formData);

  // If validation fails, return errors
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    await Connection();

    const sendEmailSuccess = await sendEmail(
      formData.firstName,
      formData.lastName,
      formData.email
    );

    if (!sendEmailSuccess) {
      return {
        error: "Error in sending email",
        statusCode: 500,
      };
    }

    const NewContact = new Contact(formData);

    const savedContact = await NewContact.save();

    if (!savedContact) {
      return {
        error: "Error creating contact",
        status: 503,
      };
    }

    return {
      success: true,
      status: 201,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Error processing form submission:", error);
    return {
      success: false,
      error: "An error occurred while processing your request",
    };
  }
}

export default SubmitContactForm;
