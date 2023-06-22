const Joi = require("joi");

const createUserSchema = Joi.object({
  firstName: Joi.string().required().label("FirstName"),
  lastName: Joi.string().required().label("LastName"),
  email: Joi.string().required().label("Email"),
  password: Joi.string().required().label("Password"),
});

const loginUserSchema = Joi.object({
  email: Joi.string().required().label("Email"),
  password: Joi.string().required().label("Password"),
});

function validateRequest(joiSchema, method = "body") {
  return function (req, res, next) {
    let requestData = null;

    if (method === "body") {
      requestData = req.body;
    } else if (method === "query") {
      requestData = req.query;
    } else if (method === "params") {
      requestData = req.params;
    }

    const { error } = joiSchema.validate(requestData, {
      abortEarly: false,
    });

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      res.status(400).json({
        error: errorMessage,
      });
      return;
    }
    next();
  };
}

module.exports = { validateRequest, createUserSchema, loginUserSchema };
