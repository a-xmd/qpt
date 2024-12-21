import express from "express";
// @todo: import routers from different file
import {
  articleRouter,
  commentRouter,
} from "./controllers/decorators/request-methods.ts";

import "./controllers/article.ts";
import "./controllers/comment.ts";

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
