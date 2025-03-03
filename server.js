process.on("uncaughtException", function (err) {
  console.log(err);
});

const express = require("express");
const bodyParser = require("body-parser");
const log = require("./libs/log")(module);
const app = express();
const Sequelize = require("sequelize");
const { error } = require("winston");
const dbConfig = require("./config/db.config");
const { Feature } = import("./react-app/model/Feature.ts");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mssql",
});
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.logger("dev"));

app.get("/express_backend", (req, res) => {
  // const arr = Feature.findAll({ raw: true })
  // .then((users) => {
  // console.log(users);
  // })
  // .catch((err) => console.log(err));
  const arr = [123, 234, 345, 456, 453];
  res.send({
    message: "Все работает отлично, это стартовая страница приложения",
    arr: arr,
  });
});

app.get("/api/articles", function (req, res) {
  res.send("This is not implemented now1");
});

app.post("/api/articles", function (req, res) {
  res.send("This is not implemented now2");
});

app.get("/api/articles/:id", function (req, res) {
  res.send("This is not implemented now");
});

app.put("/api/articles/:id", function (req, res) {
  res.send("This is not implemented now");
});

app.delete("/api/articles/:id", function (req, res) {
  res.send("This is not implemented now");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successful`);
    console.log(`Listening on port ${port}`);
  } catch {
    console.error("Unable to connect to the database:", error);
  }
});

app.use(function (req, res, next) {
  res.status(404);
  log.debug;
  // log.debug('Not found URL: %s',req.url);
  res.send({ error: "Not found", st: log.debug });
  return;
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log("Internal error(%d): %s", res.statusCode, err.message);
  // log.error("Internal error(%d): %s", res.statusCode, err.message);
  res.send({
    error: err.message,
    st: log.error,
  });
  return;
});

app.get("/ErrorExample", function (req, res, next) {
  next(new Error("Random error!"));
});
