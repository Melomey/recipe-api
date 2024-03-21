import { Router } from "express";
import { addRecipe, getRecipe, getRecipes } from "../controllers/recipes.controllers.js";

const router = Router();

router.post("/recipes", addRecipe);

router.get("/recipes", getRecipes);

router.get("/recipes/:id", getRecipe);

router.patch("/recipes/:id", (req, res) => {
  res.send("Patch all recipes");
});

router.delete("/recipes/:id", (req, res) => {
  res.send("Delete all recipes");
});

export default router;
