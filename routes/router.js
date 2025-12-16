import{Router} from "express"
import xRoutes from "./xRoutes.js";

const router =Router();
router.use("/xxx", xRoutes);

export default router;