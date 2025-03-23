import { Router } from "express";
import { signin, signup } from "../controller/userController";


const router = Router();
 


router.post('/signup',signup)
router.post('/signin',signin)
router.post('/user',signup)

export const userRouter = router