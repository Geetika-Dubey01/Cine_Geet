const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
require("dotenv").config();
import movieRoutes from "./routes/movieRoutes.js"; 
import paymentRoutes from "./routes/paymentRoutes.js";


dotenv.config(); // .env file se variables load karega
const app = express();

// Middlewares
app.use(cors()); // frontend ko allow karega
app.use(express.json()); // json data handle karega
app.use(express.json());

// Simple route test
app.get('/', (req, res) => {
  res.send('Cine Geet Backend is Running 🚀');
});

// MongoDB connect (abhi step 4 me isko setup karenge)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Basic route
app.get("/", (req, res) => {
  res.send("Cine Geet Backend Running...");
});
console.log("Your Mongo URI is:", process.env.MONGO_URI);

app.use("/api/movies", movieRoutes);
  const movies = await res.json();
  displayMovies(movies);

app.use("/api/payment", paymentRoutes);
// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
