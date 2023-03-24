const express = require("express");
const bodyParser = require("body-parser");
const { City } = require("./models/index");

// require("dotenv").config();

const { PORT } = require("./config/serverConfig");
// const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  const app = express();

  //   const PORT = 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    // console.log(db);
    // console.log(process.env);

    // await City.create({
    //   name: "New Delhi",
    // });

    // const repo = new CityRepository();
    // repo.createCity({ name: "pune" });
  });
};

setupAndStartServer();
