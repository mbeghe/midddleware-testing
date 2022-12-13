import { Router } from "express";
import { UpdateUserValidation } from "./validations/update-user-validation";

export const router = Router();

router.post("/", UpdateUserValidation, (req, res) => {
  return res.status(200).send("holi");
});
