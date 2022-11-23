import db from "./database.js";

const controller = {
  welcome: (req, res) => {
    res.status(200).send("Welcome to the hackhaton adventure !");
  },
};

export default controller;
