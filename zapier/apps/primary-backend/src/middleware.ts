import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Middleware logic to authenticate user
    const token = req.headers.authorization as unknown as string | undefined;
    if (token) {
        // Logic to validate token
        const payload = jwt.verify(token, JWT_PASSWORD);
        if (!payload) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        // If valid, proceed to the next middleware or route handler
        if(payload){
            //@ts-ignore
            req.id = payload.id
            next();
        }

    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};