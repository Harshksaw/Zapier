import { Request, Response } from 'express';
import { SigninSchema, SignupSchema } from '../types';


export async function signup(req: Request, res: Response) {
    try {
        const body = req.body
        const parsedData = SignupSchema.parse(body);
        // Logic for signing up the user

        if(!parsedData.success){
            return res.status(400).json({ error: 'Invalid input' });
        }





        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ error: 'Signup failed' });
    }
}

export async function signin(req: Request, res: Response) {
    try {
        // Logic for signing in
        res.status(200).json({ message: 'User signed in' });
    } catch (error) {
        res.status(401).json({ error: 'Signin failed' });
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        // Logic for retrieving user info
        res.status(200).json({ user: 'User data' });
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
}