import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { sendEmail } from "./utils/sendEmail.js";

config({ path: "./config.env" });
// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/test'; // Replace <database_name>

// Define the BMI data schema
const BMIDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  gender: { type: String, required: true },
  bmi: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});
const BMIData = mongoose.model('BMIData', BMIDataSchema);

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const app = express();
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));
// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle BMI calculation and storage
app.post('/calculate-bmi', async (req, res) => {
  const {name, height, weight, gender, bmi } = req.body;

  // Input validation
  if (!name||!height || !weight || !gender || !bmi) {
    return res.status(400).send('Please provide valid name,height, weight, gender, and bmi.');
  }

  try {
    // Create new BMI data object
    const newBMIData = new BMIData({
      name,
      height,
      weight,
      gender,
      bmi
    });

    // Save data to MongoDB
    await newBMIData.save();

    res.send('BMI calculated and stored successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data!');
  }
});

app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    console.log("Attempting to send email...");
    await sendEmail({
      email: "p3030306@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Error in sendMail route:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
