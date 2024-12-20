import express, { type Request, type Response } from "express";
import { Article } from "../models/article.ts";
import { Articles } from "../collections/articles.ts";
import { Get } from "./decorators/request-methods.ts";

export const articleRouter = express.Router();

export class ArticleController {
  @Get<ArticleController>("/", articleRouter)
  async getAll(_req: Request, res: Response) {
    console.log("☀️");
    res.json({ data: await new Articles().fetchAll() });
  }

  @Get<ArticleController>("/:id", articleRouter)
  async get(req: Request, res: Response) {
    console.log("👋");
    const { id } = req.params;
    res.json({ data: await new Article(id).fetch() });
  }
}
