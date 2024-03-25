import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    //Add recipe to db
    
    const createResult = await RecipeModel.create({...req.body,
    image: req.file.filename
    });
    //return Response
    res.status(201).json(createResult);
  } catch (error) {
    //forward to express error handler
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
    //get all recipes from db
    const displayRecipe = await RecipeModel.find();
    //Return response
    res.json(displayRecipe);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
    try{
        //get recipe by id
        const displayRecipe = await RecipeModel.findById(req.params.id);

        //return 404 if not found
        if (displayRecipe === null) {
            res.status(404),json({
                message: `Recipe with objectId: ${req.params.id} Not Found`
            })
        }
        //return response
        res.json(displayRecipe);
    }
  catch (error){
    next(error);
  }
};

export const patchRecipe = (req, res) => {
  res.send("Update recipe with id");
};

export const deleteRecipe = (req, res) => {
  res.send("Delete recipe with id");
};
