const sql = require("../database/index");

// constructor
const ProgrammingLanguage = function(lang) {
  this.name = lang.name;
  this.released_year = lang.released_year;
  this.github_rank = lang.github_rank;
};

ProgrammingLanguage.create = (form, result) => {
  sql.query("INSERT INTO programming_languages SET ?", form, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created programming language: ", { id: res.insertId, ...form });
    result(null, { id: res.insertId, ...form });
  });
};

ProgrammingLanguage.findById = (id, result) => {
  sql.query(`SELECT * FROM programming_languages WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found programming language: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Programming Language with the id
    result({ kind: "not_found" }, null);
  });
};

ProgrammingLanguage.getAll = (name, result) => {
  let query = "SELECT * FROM programming_languages";

  if (name) {
    query += ` WHERE programming_languages LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("programming languages: ", res);
    result(null, res);
  });
};

ProgrammingLanguage.getMostPopular = result => {
  sql.query("SELECT * FROM programming_languages WHERE github_rank > 5 ORDER BY github_rank", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("progamming languages: ", res);
    result(null, res);
  });
};

ProgrammingLanguage.updateById = (id, lang, result) => {
  sql.query(
    "UPDATE programming_languages name title = ?, released_year = ?, github_rank = ? WHERE id = ?",
    [lang.title, lang.description, lang.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Programming Languages with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated programming language: ", { id: id, ...lang });
      result(null, { id: id, ...lang });
    }
  );
};

ProgrammingLanguage.remove = (id, result) => {
  sql.query("DELETE FROM programming_languages WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Programming Language with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted programming language with id: ", id);
    result(null, res);
  });
};

ProgrammingLanguage.removeAll = result => {
  sql.query("DELETE FROM programming_languages", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} programming languages`);
    result(null, res);
  });
};

module.exports = ProgrammingLanguage;