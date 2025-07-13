import express from "express";
import { OAuth2Client } from "google-auth-library";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import { authenticate } from "../middleware/authMiddleware"; // ✅ use middleware

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ✅ POST /google: Login and return JWT + user
router.post("/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) return res.status(400).json({ error: "Invalid payload" });

    const { sub, name, email, picture } = payload;

    let user = await User.findOne({ googleId: sub });

    if (!user) {
      user = new User({ googleId: sub, name, email, picture });
      await user.save();
    }

    const jwtPayload = { id: user._id, name: user.name, email: user.email,picture: user.picture, };
    const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return res.json({ token: accessToken, user });
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
});

// ✅ GET /me: Return user info if token is valid
router.get("/user", authenticate, async (req, res) => {
  const user = (req as any).user;
  res.json({ user });
});

export default router;
