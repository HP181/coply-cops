"use server";

import Career from "@/lib/CareerSchema";
import Connection from "@/lib/Connection";

const { z } = require("zod");

const formSchema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  position: z.string().min(1, { message: "Position of Interest is required" }),
  experience: z
    .string()
    .min(1, { message: "Years of Experience is required" })
    .transform((value) => parseFloat(value)) // Convert the string to a number
    .refine((value) => !isNaN(value) && value >= 0 && value <= 50, {
      message: "Experience must be a number between 0 and 50",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1000, { message: "Message must not exceed 1000 characters" })
    .min(1, { message: "This field is required" }),
});

async function SubmitCareerForm(formData) {
  const result = formSchema.safeParse(formData);

  console.log("wefv", result);

  // If validation fails, return errors
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    await Connection();

    // const sendEmailSuccess = await sendEmail(
    //   formData.firstName,
    //   formData.lastName,
    //   formData.email
    // );

    // if (!sendEmailSuccess) {
    //   return {
    //     error: "Error in sending email",
    //     statusCode: 500,
    //   };
    // }

    const NewCareer = new Career(formData);

    const savedCareer = await NewCareer.save();

    if (!savedCareer) {
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

export default SubmitCareerForm;
