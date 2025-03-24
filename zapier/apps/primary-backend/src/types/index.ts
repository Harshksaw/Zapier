import {z} from 'zod';


export const SignupSchema= z.object({
    username: z.string().min(5),
    password: z.string().min(6),  
    name: z.string().optional(),
    email: z.string().email(), 
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

export const ZapCreateSchema = z.object({
    triggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actionId: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata: z.any().optional(),
    })),


})