import express from "express";
import {
  bookAppointment,
  deleteAppointment,
  getAllAppointments,
  updateAppointment,
} from "../controller/appointmentController.js";
import {
  isPatientAuthenticated,
  isAdminAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/book", isPatientAuthenticated, bookAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointment);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
