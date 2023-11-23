const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);
//REGISTER || POST
router.post("/register", registerController);
//Auth || POST
router.post("/getUserData", authMiddleware, authController);
//Aplly Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
//Notification Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notification Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET all docs
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
