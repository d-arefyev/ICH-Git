import { Request, Router } from "express";
import Post from "../models/Post";

const router = Router();

//Получить все посты
router.get(
  "/posts",
  //@ts-ignore
  async (req: Request, res: Response) => {
    try {
      const posts = await Post.find();
      //@ts-ignore
      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("End operation");
    }
  }
);
//Получить пост по id
router.get(
  "/posts/:id",
  //@ts-ignore
  async (req: Request, res: Response) => {}
);
//Создать пост
router.post(
  "/posts",
  //@ts-ignore
  async (req: Request, res: Response) => {
    try {
      const { userId, title, body } = req.body;
      const post = await Post.create({ userId, title, body });
      //@ts-ignore
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Operation POST-create ended");
    }
  }
);
//Редактировать пост
router.patch(
  "/posts",
  //@ts-ignore
  async (req: Request, res: Response) => {}
);
//Удалить пост
router.delete(
  "/posts",
  //@ts-ignore
  async (req: Request, res: Response) => {
    try {
      const { postId } = req.body;
      await Post.findByIdAndDelete(postId);
      //@ts-ignore
      return res.status(200).json({ message: "Deleted" });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Delete operation ended");
    }
  }
);
export default router;
