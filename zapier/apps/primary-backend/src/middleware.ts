import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Middleware logic to authenticate user
    const token = req.headers.authorization;
    if (token) {
        // Logic to validate token
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};