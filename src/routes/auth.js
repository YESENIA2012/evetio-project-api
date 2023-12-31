const { Router } = require("express");
const UsersController = require("../controllers/usersController.js");
const {
  validateRequest,
} = require("../middlewares/validateData.js");

const { createUserSchema } = require("./schemas/user.js")
const { loginUserSchema } = require("./schemas/login.js")

const userRouter = Router();
const userController = new UsersController();

userRouter.post(
  "/signup",
  validateRequest(createUserSchema),
  async (req, res, next) => {
    try {
      const newUser = await userController.createUser(req.body);
      res.json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post(
  "/login",
  validateRequest(loginUserSchema),
  async (req, res, next) => {

    try {
      const userFound = await userController.loginUser(req.body);

      res.json(userFound);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = userRouter;
