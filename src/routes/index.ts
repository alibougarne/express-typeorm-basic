import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./users";
import project from "./project";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/project", project);

export default routes;
