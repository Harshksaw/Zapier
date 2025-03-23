import {z} from 'zod';


export const SignupSchema= z.object({
    username: z.string().min(5),
    password: z.string().min(6),   
})

export const SigninSchema= z.object({
    username: z.string(),
    password: z.string(),   
})
export const UserData= z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),

})