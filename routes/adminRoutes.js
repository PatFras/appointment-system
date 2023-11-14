const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const router = express.Router();

//GET method || users
router.get("/getAllUsers", authMiddleware, getAllUsersController);
//GET method || doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
//POST account status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
