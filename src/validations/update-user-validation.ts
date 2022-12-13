import { body } from "express-validator";
import { ValidationHandler } from ".";

export const UpdateUserValidation = [
  body("username").isEmail(),
  ValidationHandler,
];
