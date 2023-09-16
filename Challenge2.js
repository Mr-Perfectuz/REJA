const animal_list = [
  "fox",
  "ant",
  "bird",
  "lion",
  "wolf",
  "deer",
  "beer",
  "frog",
  "hen",
  "mole",
  "duck",
  "goat",
  "dog",
  "cat",
  "bat",
  "cock",
  "cow",
];

function findAnimal(txt) {
  const lowercaseTxt = txt.toLowerCase();

  const result = [];

  for (const animal of animal_list) {
    const lowercaseAnimal = animal.toLowerCase();

    if (check_Each_Letters(lowercaseAnimal, lowercaseTxt)) {
      result.push(animal);
    }
  }
  return result;
}

function check_Each_Letters(listdagi_soz, input_soz) {
  for (const harf of listdagi_soz) {
    if (!input_soz.includes(harf)) {
      return false;
    }
  }
  return true;
}

const find_animal = findAnimal("fdgwoalt");
console.log(find_animal);
