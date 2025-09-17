import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import passwordRoute from "./routes/passwordRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
connectDB();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.use("/api/passwords", passwordRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
