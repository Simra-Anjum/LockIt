import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  site: { type: String, required: true },
  username: { type: String, required: true },
  passwords: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true } 
});

const Password = mongoose.model("Password", passwordSchema);

export default Password;
