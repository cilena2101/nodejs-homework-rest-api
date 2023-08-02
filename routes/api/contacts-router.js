import express from "express";

import { contactsController } from "../../controllers/index.js";

import { contactsSchemas } from "../../schemas/index.js";

import { validateBody } from "../../decorators/index.js";

import { authenticate, isValidId } from "../../middlewars/index.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.add
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteById);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  contactsController.updateFavorite
);

export default contactsRouter;
