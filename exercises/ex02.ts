interface Animal {
  breed: string;
  name: string;
}

interface SoundMaker {
  makeSound(): void;
}

class Pet implements Animal, SoundMaker {
  breed: string;
  name: string;

  constructor(breed: string, name: string) {
    this.breed = breed;
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

const myPet = new Pet("Labrador", "Buddy");
myPet.makeSound();