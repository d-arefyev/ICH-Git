import { Router, Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Define interfaces for request bodies
interface AuthRequestBody {
  userData: {
    login: string;
    password: string;
  };
}

interface RegisterRequestBody {
  userData: {
    login: string;
    password: string;
  };
}

interface BodyTransferDTO {
  userData: {
    login: string;
    password: string;
  };
}

const router = Router();

// Auth
router.post(
  "/auth",
  //@ts-ignore
  async (req: Request<{}, {}, AuthRequestBody>, res: Response) => {
    try {
      const { userData } = req.body;
      const { login, password } = userData;

      const user = await User.findOne({ userName: login });

      if (!user?.userName) {
        return res.status(401).json({ message: "Пользователя не существует" });
      }

      const isMatch = await bcrypt.compare(password, user.hash);
      if (!isMatch) {
        return res.status(401).send("Пароль не верный");
      }

      const token = jwt.sign(
        { userId: user.idUser, email: user.userName }, // Payload
        "123123123", // Secret
        { expiresIn: "1h" } // Token expiration time
      );

      return res.json({ token, id: user.idUser });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    }
  }
);

// Signup
router.post(
  "/register",
  // @ts-ignore
  async (req: Request<{}, {}, RegisterRequestBody>, res: Response) => {
    try {
      const { userData } = req.body;
      const { login, password } = userData;

      const user = await User.findOne({ userName: login });

      if (user?.userName) {
        return res.status(401).json({ message: "Пользователь существует" });
      }

      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(password, saltRounds);

      const newUser = await User.create({
        userName: login,
        hash: hashPassword,
        idUser: "id-" + Math.random().toString(36).substr(2, 9),
      });

      const token = jwt.sign(
        { userId: newUser.idUser, email: newUser.userName }, // Payload
        "123123123", // Secret
        { expiresIn: "1h" } // Token expiration time
      );

      return res.json({ token, id: newUser.idUser });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  }
);

export default router;
