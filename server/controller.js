import { all } from "axios";
import Cars from "./db.json" assert { type: "json" };

let globalId = 4;

const handlerFunction = {
  saySup: (req, res) => {
    res.send({
      message: "Sup dude",
    });
    },
};

get allCars: (req, res) => {
    res.send({
    message: "Here are all the cars",
    allCars: car,
    )}
