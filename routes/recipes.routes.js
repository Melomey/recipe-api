import { Router } from "express";
import multer from "multer";
import { addRecipe, getRecipe, getRecipes } from "../controllers/recipes.controllers.js";

//Configure multer/upload middleware
const upload = multer({dest: "uploads"});

//create recipes router
const router = Router();


router.post("/recipes",upload.single('image'), addRecipe);

router.get("/recipes", getRecipes);

router.get("/recipes/:id", getRecipe);

router.patch("/recipes/:id", (req, res) => {
  res.send("Patch all recipes");
});

router.delete("/recipes/:id", (req, res) => {
  res.send("Delete all recipes");
});

export default router;
