import express from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { registerSchema,loginSchema, verifyEmailSchema } from "../libs/validateSchema.js";
import { registerUser,loginUser, verifyEmail } from "../controllers/authController.js";


const router = express.Router();

router.post(
  "/register",
  validateRequest({
    body: registerSchema,
  }),
  registerUser
);


router.post(
    "/login",
    validateRequest({
      body: loginSchema,
    }),
    loginUser
  );

  router.post(
    "/verify-email",
    validateRequest({
      body: verifyEmailSchema,
    }),
    verifyEmail
  );
  
export default router;
