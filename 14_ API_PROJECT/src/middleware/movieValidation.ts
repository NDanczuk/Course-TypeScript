import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title").isString().withMessage("Title is mandatory!"),
    body("rating")
      .isNumeric()
      .withMessage("The rating must be a number!")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("The score should be between 0 and 10!");
        }
        return true;
      }),
    body("description").isString().withMessage("Description is mandatory!"),
    body("director").isString().withMessage("The director's name is mandatory!"),
    body("poster").isURL().withMessage("Image must be an URL!")
  ];
};
