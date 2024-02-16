// inport packages and files
import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";

// Set up express instance
const app = express();

// Set up middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("client"));
app.use(
  session({
    secret: "Thisisasupersecret",
    saveUninitialized: true,
    resave: false,
  })
);

// Import handlers
import handlerFunctions from "./controller.js";

// Routes
app.get("/hello", handlerFunctions.sayHello);
app.get("/cars", handlerFunctions.getAllCars);
app.post("/addCar", handlerFunctions.addCar);
app.delete("/deleteCar/:id", handlerFunctions.deleteCar);
app.put("/updateCar/:id", handlerFunctions.updateCar);

// start up the server
app.listen(8000, () => {
  console.log("Start Your enginens at  http://localhost:8000");
});



