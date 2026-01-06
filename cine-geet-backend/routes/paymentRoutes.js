import express from "express";
const router = express.Router();

router.post("/save-payment", async (req, res) => {
  try {
    const { user, seats, amount } = req.body;
    console.log("Payment received:", user, seats, amount);
    res.json({ message: "Payment recorded successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Payment save failed" });
  }
});

export default router;
