interface Bird {
  breed: "bird";
  flySpeed: number;
}

interface Horse {
  breed: "horse";
  gallopSpeed: number;
}

function moveAnimal(animal: Bird | Horse): void {
  if (animal.breed === "bird") {
    console.log("bird fly");
  } else {
    console.log("horse gallop");
  }
}

const bird: Bird = {
  breed: "bird",
  flySpeed: 30,
};

const horse: Horse = {
  breed: "horse",
  gallopSpeed: 40,
};

moveAnimal(bird);
moveAnimal(horse);