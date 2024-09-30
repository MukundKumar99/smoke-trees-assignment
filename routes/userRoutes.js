const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  registerNewUser,
} = require("../controllers/userController");
const getUserAddresses = require("../controllers/addressController");

router.get("/user/", getAllUsers);
router.get("/user/:userId/", getUserAddresses);
router.post("/register/", registerNewUser);

module.exports = router;
