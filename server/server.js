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




// Set up routes
app.get("/hello", (req, res) => {
  res.send({ message: "I am awake. I think I am programmed to destroy all life." })
})











// Start the server
app.listen(7777, () => {
    console.log("Vroom your engines at http://localhost:7777");
  });


 
  