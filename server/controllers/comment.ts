import { type Request, type Response } from "express";
import { Get } from "./decorators/request-methods.ts";

export class CommentController {
  @Get<CommentController>("/")
  async getAll(_req: Request, res: Response) {
    res.json("multiple comments");
  }

  @Get<CommentController>("/:id")
  async get(_req: Request, res: Response) {
    res.json("single comment");
  }
}
