import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success("Successfully logged out");
      setIsAuthenticated(false);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="ZeeCare Medical Institute Logo" />
        </Link>

        <div className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
          <button
            className="navbar__close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <RiCloseLine />
          </button>

          <div className="navbar__menu">
            <Link to="/" className="navbar__link">
              Home
            </Link>
            <Link to="/appointment" className="navbar__link">
              Appointment
            </Link>
            <Link to="/about" className="navbar__link">
              About Us
            </Link>
          </div>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="navbar__auth-btn navbar__auth-btn--logout"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="navbar__auth-btn navbar__auth-btn--login"
            >
              Login
            </button>
          )}
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
