import { Router } from "express";
import { signin, signup } from "../controller/userController";
import { authMiddleware } from "../middleware";


const router = Router();
 


router.post('/zap',authMiddleware,signup)
router.post('/signin',authMiddleware ,signin)
router.post('/',authMiddleware, signup)

export const zapRouter = router