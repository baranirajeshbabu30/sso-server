import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: { type: String, required: true },
  picture: String,
});

export const User = mongoose.model("User", userSchema);
