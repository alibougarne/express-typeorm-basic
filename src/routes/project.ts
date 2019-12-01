import { Router } from "express";
import ProjectController from "../controllers/ProjectController";

const router = Router();

//Get all projects with pagination
router.post("/all", ProjectController.listAll);

export default router;
