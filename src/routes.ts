import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController();
const temsController = new ItemsController();

routes.get("/items", temsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.put("/items/:id", async (request, response) => {
  const id = request.params.id;
  // const update = await knex()
});

export default routes;
