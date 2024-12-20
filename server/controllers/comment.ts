import express, { type Request, type Response } from "express";
import { Get } from "./decorators/request-methods.ts";

export const commentRouter = express.Router();

export class CommentController {
  @Get<CommentController>("/", commentRouter)
  async getAll(_req: Request, res: Response) {
    res.json("multiple comments");
  }

  @Get<CommentController>("/:id", commentRouter)
  async get(_req: Request, res: Response) {
    res.json("single comment");
  }
}
