import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address."],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number should be at least 10 characters long."],
    maxLength: [10, "Phone number should be at least 10 characters long."],
  },
  address: {
    type: String,
    required: true,
  },
  insuranceNumber: {
    type: String,
    required: true,
    minLength: [10, "Insurance number must be exactly 10 characters long."],
    maxLength: [10, "Insurance number must be exactly 10 characters long."],
  },
  dob: {
    type: Date,
    required: [true, "Please enter your date of birth."],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password should be at least 8 characters long."],
    select: false,
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    required: true,
    default: false,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
});

export default Appointment = mongoose.model("Appointment", appointmentSchema);
