const petName = document.getElementById('petName');
const ownerName = document.getElementById('ownerName');
const species = document.getElementById('species');
const breed = document.getElementById('breed');
const saveButton = document.querySelector('form button');

const pet = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const list = function () {};
