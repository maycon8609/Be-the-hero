import { Router } from "express";

const routes = Router();

import auth from "./middleware/auth.js";

import OngController from "./controllers/OngController.js";
import IncidentController from "./controllers/IncidentController.js";
import ProfileController from "./controllers/ProfileController.js";
import SessionController from "./controllers/SessionController.js";

routes.get("/ongs", OngController.index);
routes.post("/ongs", auth.createOng, OngController.store);

routes.get("/incidents", auth.listIncidents, IncidentController.index);
routes.post(
  "/incident",
  auth.createIncidentBody,
  auth.createIncidentAuth,
  IncidentController.create
);
routes.delete(
  "/incident/:id",
  auth.deleteIncidentParams,
  auth.deleteIncidentHeaders,
  IncidentController.delete
);

routes.get("/profile", auth.listProfile, ProfileController.index);

routes.post("/session", auth.createSession, SessionController.create);

export default routes
