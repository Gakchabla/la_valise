import db from "./database.js";

const controller = {
  welcome: (req, res) => {
    res.status(200).send("Welcome to the hackhaton adventure !");
  },
  getDestination: (req, res) => {
    db.query("SELECT * FROM destinations").then(([results]) => {
      if (results != null) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Not Found");
      }
    });
  },
  getItems: (req, res) => {
    db.query("SELECT * FROM items").then(([results]) => {
      if (results != null) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Not Found");
      }
    });
  },
  getEssentielsItems: (req, res) => {
    db.query("SELECT * FROM items WHERE essentiel = 1").then(([results]) => {
      if (results != null) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Not Found");
      }
    });
  },
  getNonEssentielsItems: (req, res) => {
    const initialSql = "select * from items where essentiel = 0";

    const where = [];

    if (req.query.temperature != null) {
      where.push({
        column: "temperature",

        value: req.query.temperature,

        operator: "!=",
      });
    }

    if (req.query.meteo != null) {
      where.push({
        column: "meteo",

        value: req.query.meteo,

        operator: "!=",
      });
    }
    if (req.query.montagneux != null) {
      where.push({
        column: "montagneux",

        value: req.query.montagneux,

        operator: "=",
      });
    }
    if (req.query.plage != null) {
      where.push({
        column: "plage",

        value: req.query.plage,

        operator: "=",
      });
    }
    if (req.query.desert != null) {
      where.push({
        column: "desert",

        value: req.query.desert,

        operator: "=",
      });
    }
    if (req.query.urbainourural != null) {
      where.push({
        column: "urbainourural",

        value: req.query.urbainourural,

        operator: "!=",
      });
    }
    if (req.query.backpackouchill != null) {
      where.push({
        column: "backpackouchill",

        value: req.query.backpackouchill,

        operator: "!=",
      });
    }
    if (req.query.saison != null) {
      where.push({
        column: "saison",

        value: req.query.saison,

        operator: "=",
      });
    }
    if (req.query.univers != null) {
      where.push({
        column: "univers",

        value: req.query.univers,

        operator: "=",
      });
    }

    db
      .query(
        where.reduce(
          (sql, { column, operator }, index) =>
            `${sql} ${"and"} ${column} ${operator} ?`,

          initialSql
        ),

        where.map(({ value }) => value)
      )

      .then(([movies]) => {
        res.json(movies);
      })

      .catch((err) => {
        console.error(err);

        res.status(500).send("Error retrieving data from database");
      });
  },
};

export default controller;
