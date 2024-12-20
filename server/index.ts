import express from "express";
import { articleRouter } from "./controllers/article.ts";
import { commentRouter } from "./controllers/comment.ts";

const app = express();
const port = 6002;

app.use("/article", articleRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(`🟢 Listening on port ${port}...`);
});

app.use((_req, res) => {
  res.sendStatus(404);
});
