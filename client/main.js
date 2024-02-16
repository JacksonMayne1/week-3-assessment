const carDisplay = document.querySelector("#CarDisplay");
const carForm = document.querySelector("form");

const createCarCard = (carObj) => {
  const carCard = document.createElement("section");

  carCard.classList = "car-card";
  carCard.innerHTML = `
    <img src=${carObj.picture} />
    <p>${carObj.name}</p>

    <section>
    <button onclick="updateCar(${carObj.id}, 'downvote')" >-</button>
    Votes: ${carObj.votes}
    <button onclick="updateCar(${carObj.id}, 'upvote')">+</button>
    </section>

    <br/>

    <button onclick="deleteCar(${carObj.id})">Delete Me</button>
    `;

  carDisplay.appendChild(carCard);
};

const displayAllCars = (carArr) => {
  carArr.forEach((carObj) => {
    createCarCard(carObj);
  });
};

const getAllCars = () => {
  axios.get("/cars").then((res) => {
    displayAllCars(res.data.allCars);
  });
};

const handleSumbit = (evt) => {
  evt.preventDefault();
  let name = document.getElementById("carName");
  let carImg = document.getElementById("carImg");


  let bodyObj = {
    carName: name.value,
    carPic: carImg.value,
  };

  carDisplay.innerHTML = "";
  name.value = "";
  carImg.value = "";

  axios.post("/addCar", bodyObj).then((res) => {
    displayAllCars(res.data.allCars);
  });
};

const deleteCar = (id) => {
  axios.delete(`/deleteCar/${id}`).then((res) => {
    carDisplay.innerHTML = "";
    displayAllCars(res.data.allCars);
  });
};

const updateCar = (id, type) => {
  let bodyObj = {
    voteType: type,
  };

  axios.put(`/updateCar/${id}`, bodyObj).then((res) => {
    carDisplay.innerHTML = "";
    console.log(res.data.allCars);
    displayAllCars(res.data.allCars);
  });
};
carForm.addEventListener("submit", handleSumbit);

getAllCars();
