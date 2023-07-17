import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import contactsSchemas from "../../schemas/contacts-schemas.js";

import  {validateBody}  from "../../decorators/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", contactsController.getById);

contactsRouter.post("/", validateBody(contactsSchemas.contactsAddSchema), contactsController.add);

contactsRouter.delete("/:id", contactsController.deleteById);

contactsRouter.put("/:id", validateBody(contactsSchemas.contactsAddSchema), contactsController.updateById);

export default contactsRouter;
