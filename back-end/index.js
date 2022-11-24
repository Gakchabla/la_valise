import express from "express";
import controller from "./controller.js";
import db from "./database.js";
import cors from "cors";

const port = process.env.PORT ?? 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});

//connect db
db.getConnection()
  .then(console.log("DB connected"))
  .catch((err) => {
    console.error(err);
  });

//Routes GET

app.get("/", controller.welcome);
app.get("/api/destinations", controller.getDestination);
app.get("/api/items", controller.getItems);
app.get("/api/items/filter", controller.getNonEssentielsItems)
app.get("/api/items/essentiels", controller.getEssentielsItems)
