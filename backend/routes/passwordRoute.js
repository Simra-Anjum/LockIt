import express from "express";
import Password from "../models/passwordModel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get passwords of logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const passwords = await Password.find({ userId: req.user.id }); // 👈 userId se filter
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Save a password for logged-in user
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newPassword = new Password({
      ...req.body,
      userId: req.user.id, // 👈 link with user
    });
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a password by id (only for current user)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Password.deleteOne({
      _id: req.params.id,
      userId: req.user.id, // 👈 ensure only owner can delete
    });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({ message: "Password not found or unauthorized" });
    }

    res.json({ success: true, message: "Password deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
