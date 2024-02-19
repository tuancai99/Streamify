const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");

router.get("/", verifyJWT, usersController.getAllUsers);
router.patch("/", verifyJWT, usersController.updateUser);
router.delete("/", verifyJWT, usersController.deleteUser);

router.post("/", usersController.createNewUser);

module.exports = router;
