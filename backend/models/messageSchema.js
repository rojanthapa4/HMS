import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name should be at least 3 characters long."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name should be at least 3 characters long."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email address."],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number should be at least 10 characters long."],
    maxLength: [10, "Phone number should be at least 10 characters long."],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message should be at least 10 characters long."],
  },
});

export const Message = mongoose.model("Message", messageSchema);
