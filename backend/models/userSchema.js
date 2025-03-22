import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
  role: {
    type: String,
    required: true,
    enum: {
      values: ["Admin", "Doctor", "Patient"],
      message: "Role can only be 'admin', 'doctor' or 'patient'",
    },
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};
export const User = mongoose.model("User", userSchema);
