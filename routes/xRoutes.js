import { Router } from "express";
import XController from "../controllers/XController.js";
const xController = new XController();

const xRoutes = Router();

xRoutes.post("/",xController.create );

xRoutes.get("/",xController.getAll );
xRoutes.get("/:id",xController.getById );


export default xRoutes;