import express from "express";
import { articleRouter } from "./controllers/article.ts";

const app = express();
const port = 6002;

app.get("/", (_req, res) => {
  res.json("🚀");
});
app.use("/article", articleRouter);

app.listen(port, () => {
  console.log(`🟢 Listening on port ${port}...`);
});

app.use((_req, res) => {
  res.sendStatus(404);
});
