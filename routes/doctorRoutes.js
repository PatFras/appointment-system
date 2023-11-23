const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST single doc info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
//POST update profile
router.post("/updateProfile", authMiddleware, updateProfileController);
//POST get single doc info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

module.exports = router;
