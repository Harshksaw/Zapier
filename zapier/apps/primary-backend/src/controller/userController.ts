import { Request, Response } from 'express';
import { SigninSchema, SignupSchema } from '../types';
import { PrismaClient } from 'zapier-database';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { JWT_PASSWORD } from '../config';

export async function signup(req: Request, res: Response) {
    try {
        const body = req.body
        const parsedData = SignupSchema.parse(body);
        // Logic for signing up the user



        if (!parsedData.success) {
            return res.status(400).json({ error: 'Invalid input' });
        }
        const userExists = await PrismaClient.user.findUnique({
            where: { email: parsedData.data.email },
        });
        if (userExists) {
            return res.status(409).json({ error: 'User already exists' });
        }

        const password = parsedData.data.password

        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user already exists

        await PrismaClient.user.create({
            data: {
                email: parsedData.data.email,
                password: hashedPassword,
                name: parsedData.data.name,
            },
        });




        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ error: 'Signup failed' });
    }
}

export async function signin(req: Request, res: Response) {
    try {
        // Logic for signing in

        const body = req.body
        const parsedData = SigninSchema.parse(body);
        if (!parsedData.success) {
            return res.status(400).json({ error: 'Invalid input' });
        }
        const user = await PrismaClient.user.findUnique({
            where: { email: parsedData.data.username },
        });


        if (!user || user.password !== parsedData.data.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jsonwebtoken.sign({
            userId: user.id
        }, JWT_PASSWORD
        , { expiresIn: '1d' });

        // Assuming you have a way to generate a token
        // const token = generateToken(user);
        // res.status(200).json({ token });
        res.status(200).json({ message: 'User signed in', token: token });
    } catch (error) {
        res.status(401).json({ error: 'Signin failed' });
    }
}

export async function getUser(req: Request, res: Response) {
    try {

        
        // Logic for retrieving user info
        const userId = req.id;
        const user = await PrismaClient.user.findFirst({
            where: { id: userId },
            select: {
                name: true,
                email: true,
            }
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ user: 'User data' , data : user});
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
}