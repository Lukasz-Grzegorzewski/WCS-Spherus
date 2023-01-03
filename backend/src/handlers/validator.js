const { body, validationResult } = require("express-validator");

const validateInputs = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email must be a valid email")
    .normalizeEmail()
    .toLowerCase(),
  body("password")
    .trim()
    .isLength(2)
    .withMessage("Password length short, min 2 char required"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      errors.array().forEach((error) => {
        console.warn(error.msg);
      });
      res.status(422).json(errors.array());
    } else {
      next();
    }
  },
];

module.exports = {
  validateInputs,
};
