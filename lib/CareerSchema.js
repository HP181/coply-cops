import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the Mongoose schema for the job application form
const CareerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      min: [0, "Years of Experience must be at least 0"],
      max: [50, "Years of Experience must be 50 or less"],
    },
    message: {
      type: String,
      required: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [1000, "Message must not exceed 1000 characters"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the Mongoose model
const Career = mongoose.models.Career || mongoose.model("Career", CareerSchema);

export default Career;
