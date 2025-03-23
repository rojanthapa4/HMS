import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "./Input";
import "../styles/AppointmentForm.css";
import { useNavigate } from "react-router-dom";

const departments = [
  "Pediatrics",
  "Orthopedics",
  "Cardiology",
  "Neurology",
  "Oncology",
  "Radiology",
  "Physical Therapy",
  "Dermatology",
  "ENT",
];

const AppointmentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceNumber: "",
    dob: "",
    gender: "",
    appointment_date: "",
    department: "Pediatrics",
    doctor: "",
    address: "",
    hasVisited: false,
  });

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error("Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          ...formData,
          doctor_firstName: formData.doctor.split(" ")[0],
          doctor_lastName: formData.doctor.split(" ")[1],
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);
      navigate("/");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        insuranceNumber: "",
        dob: "",
        gender: "",
        appointment_date: "",
        department: "Pediatrics",
        doctor: "",
        address: "",
        hasVisited: false,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Appointment failed");
    } finally {
      setLoading(false);
    }
  };

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.doctorDepartment === formData.department
  );

  return (
    <div className="appointment-form">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <Input
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            label="Mobile Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <Input
            type="text"
            label="Insurance Number"
            name="insuranceNumber"
            value={formData.insuranceNumber}
            onChange={handleChange}
            required
          />
          <Input
            type="date"
            label="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <Input
            type="date"
            label="Appointment Date"
            name="appointment_date"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            disabled={!formData.department}
            required
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map((doctor) => (
              <option
                key={doctor._id}
                value={`${doctor.firstName} ${doctor.lastName}`}
              >
                Dr. {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <input
            type="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="hasVisited"
              checked={formData.hasVisited}
              onChange={handleChange}
            />
            Have you visited before?
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
