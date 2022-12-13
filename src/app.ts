import express from "express";
import { router } from "./router";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
