import { Router } from "express";
import { signin, signup } from "../controller/userController";
import { authMiddleware } from "../middleware";
import createZap, { getAllZaps } from "../controller/zapController";


const router = Router();
 


router.post('/',authMiddleware , createZap)
router.get('/',authMiddleware , getAllZaps)
router.post('/:zapId',authMiddleware, signup)

export const zapRouter = router