const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
const tareasRoute = require("./routes/tareasRoute");

app.use("/api/tareas", tareasRoute);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
