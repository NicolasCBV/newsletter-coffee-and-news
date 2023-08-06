import * as express from "express";
import { createServer } from "http";
import { join } from "path";
import { routes } from "./routes";
import { ErrorMiddleware } from "@infra/middlewares/error.middleware";

export const app = express();
export const server = createServer(app);

const publicDir = process.env.NODE_ENV === "production"
    ? join(__dirname, "public")
    : join(__dirname, "..", "public");

app.use(express.static(publicDir));
app.use(express.static(
  process.env.NODE_ENV === "production"
    ? join(__dirname, "views") 
    : join(__dirname, "..", "views")
));

app.set("css", join(publicDir, "css"));
app.set("javascript", join(publicDir, "javascript"));
app.set("images", join(publicDir, "images"));

app.use(express.json());

app.use(routes);
app.use(ErrorMiddleware.exec);

server.listen(3030, () => {
  if (process.env.NODE_ENV !== "test") console.log("Server running!");
});
