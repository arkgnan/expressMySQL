const ProgrammingLanguage = require("../models/programming.languages.js");

// Create and Save a new Programming Language
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Programming Language
  const pLang = new ProgrammingLanguage({
    name: req.body.name,
    released_year: req.body.released_year,
    github_rank: req.body.github_rank || 0
  });

  // Save Programming Language in the database
  ProgrammingLanguage.create(pLang, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Programming Language."
      });
    else res.send(data);
  });
};

// Retrieve all Programming Languages from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  ProgrammingLanguage.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving programming languages."
      });
    else res.send(data);
  });
};

// Find a single Programming Language by Id
exports.findOne = (req, res) => {
  ProgrammingLanguage.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Programming Language with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Programming Language with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find most popular Programming Languages
exports.findMostPopular = (req, res) => {
  ProgrammingLanguage.getMostPopular((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving programming languages."
      });
    else res.send(data);
  });
};

// Update a Programming Language identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  ProgrammingLanguage.updateById(
    req.params.id,
    new ProgrammingLanguage(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Programming Language with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Programming Language with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Progamming language with the specified id in the request
exports.delete = (req, res) => {
  ProgrammingLanguage.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Programming Language with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Programming Language with id " + req.params.id
        });
      }
    } else res.send({ message: `Programming Language was deleted successfully!` });
  });
};

// Delete all Programming Language from the database.
exports.deleteAll = (req, res) => {
  ProgrammingLanguage.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all programming languages."
      });
    else res.send({ message: `All Programming Languages were deleted successfully!` });
  });
};