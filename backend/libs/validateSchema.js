import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("Invalid Email Address"),
    password : z.string().min(8,"Password must be 8 characters"),
    name : z.string().min(3,"Name must at least 3 characters"),
});


export const loginSchema = z.object({
    email : z.string().email("Invalid Email Address"),
    password: z.string().min(6,"Password is required"),
});

export const verifyEmailSchema = z.object({
    token : z.string().min(1, "Token is Required"),
});