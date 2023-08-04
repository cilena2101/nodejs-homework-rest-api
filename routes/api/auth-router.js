import express from "express";

import { validateBody } from "../../decorators/index.js";

import { usersSchemas } from "../../schemas/index.js";

import { authController } from "../../controllers/index.js";

import { authenticate} from "../../middlewars/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(usersSchemas.userSignupSchema), authController.signup);

authRouter.post("/signin", validateBody(usersSchemas.userSigninSchema), authController.signin);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout)

export default authRouter;
