import { Router } from "express";
import { getExampleById } from "../controllers/example.controller";

const exampleRouter = Router();

exampleRouter.get("/", getExampleById);

export { exampleRouter };
