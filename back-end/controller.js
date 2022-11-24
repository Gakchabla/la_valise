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
};

export default controller;
