import initCars from "./db.json" assert { type: "json" };

let Cars = [...initCars]

let globalId = 4;

const handlerFunctions = {
  sayHello: (_, res) => {
    res.send({
      message: "Sup dude",
    });
  },

  getAllCars: (req, res) => {
    res.send({
      message: "Here are all the cars",
      allCars: Cars,
    });
  },

  addCar: (req, res) => {
    const carname = req.body.carname;
    const carpic = req.body.carpic;

    const newCar = {
      id: globalId,
      name: carname,
      picture: carpic,
      votes: 0,
    };

    Cars.push(newCar);

    globalId++;


    res.send({
      message: "Car added",
      allCars: Cars,
    });
  },

  deleteCar: (req, res) => {
    const carId = req.params.id;

    for (let i = 0; i < Cars.length; i++) {
      if (Cars[i].id === +carId) {
        Cars.splice(i, 1); // Replace 'drinks' with 'Cars'
        break;
      }
    }

    res.send({
      message: "Car deleted",
      allCars: Cars,
    });
  },

  updateCar: (req, res) => {
    const carId = req.params.id;
    const voteType = req.body.voteType;

    const carsIdx = Cars.findIndex((cars) => {
      return cars.id === +carId;
    });

console.log(voteType)

    if (voteType === "upvote") {
      console.log("upvote");
      Cars[carsIdx].votes += 1;
    } else if (voteType === "downvote") {
      console.log("downvote");
      Cars[carsIdx].votes -= 1;
    }

    console.log(Cars[carsIdx])

    res.send({
      message: "vote count updated",
      allCars: Cars,
    });
  },
};
export default handlerFunctions;
