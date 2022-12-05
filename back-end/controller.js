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
    db.query("SELECT * FROM essentiels").then(([results]) => {
      if (results != null) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Not Found");
      }
    });
  },
  getNonEssentielsItems: (req, res) => {
    const initialSql = "select * from items";

    const where = [];

    if (req.query.hot != null) {
      where.push({
        column: "hot",

        value: req.query.hot,

        operator: "=",
      });
    }
    if (req.query.cold != null) {
      where.push({
        column: "cold",

        value: req.query.cold,

        operator: "=",
      });
    }

    if (req.query.mauvais_temps != null) {
      where.push({
        column: "mauvais_temps",

        value: req.query.mauvais_temps,

        operator: "=",
      });
    }
    if (req.query.soleil != null) {
      where.push({
        column: "soleil",

        value: req.query.soleil,

        operator: "=",
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
    if (req.query.urbain != null) {
      where.push({
        column: "urbain",

        value: req.query.urbain,

        operator: "=",
      });
    }
    if (req.query.rural != null) {
      where.push({
        column: "rural",

        value: req.query.rural,

        operator: "=",
      });
    }
    if (req.query.detente != null) {
      where.push({
        column: "detente",

        value: req.query.detente,

        operator: "=",
      });
    }
    if (req.query.backpack != null) {
      where.push({
        column: "backpack",

        value: req.query.backpack,

        operator: "=",
      });
    }
    if (req.query.automne_hiver != null) {
      where.push({
        column: "automne_hiver",

        value: req.query.automne_hiver,

        operator: "=",
      });
    }
    if (req.query.printemps_ete != null) {
      where.push({
        column: "printemps_ete",

        value: req.query.printemps_ete,

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

    db.query(
      where.reduce(
        (sql, { column, operator }, index) =>
          `${sql} ${index === 0 ? "where" : "and"} ${column} ${operator} ?`,

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
