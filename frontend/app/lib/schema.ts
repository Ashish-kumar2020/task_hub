import {z} from "zod";

export const signInSchema = z.object({
    email : z.string().email("Invalid Email Address"),
    password: z.string().min(6,"Password is required"),
})