module.exports = app => {
  const programmingLanguages = require("../controllers/programming.languages.js");

  var router = require("express").Router();

  // Create a new Programming Language
  router.post("/", programmingLanguages.create);

  // Retrieve all Programming Language
  router.get("/", programmingLanguages.findAll);

  // Retrieve most poputer Programming Language
  router.get("/popular", programmingLanguages.findMostPopular);

  // Retrieve a single Programming Language with id
  router.get("/:id", programmingLanguages.findOne);

  // Update a Programming Language with id
  router.put("/:id", programmingLanguages.update);

  // Delete a Programming Language with id
  router.delete("/:id", programmingLanguages.delete);

  // Delete all Programming Language
  router.delete("/", programmingLanguages.deleteAll);

  app.use('/programming-languages', router);
};