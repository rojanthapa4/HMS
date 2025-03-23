import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceNumber: "",
    address: "",
    dob: "",
    gender: "",
    password: "",
    role: "Patient",
  });
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        formData,

        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigate("/");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        insuranceNumber: "",
        address: "",
        dob: "",
        gender: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create Account</h2>
        <p className="form-subtitle">Join our healthcare community</p>

        <form onSubmit={handleRegistration}>
          <div className="form-grid">
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Insurance Number"
                value={formData.nic}
                onChange={(e) =>
                  setFormData({ ...formData, insuranceNumber: e.target.value })
                }
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
              />
            </div>
            <div className="input-group">
              <input
                type="date"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                required
              />
            </div>

            <div className="input-group">
              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="form-footer">
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
            <button type="submit" className="auth-button">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
