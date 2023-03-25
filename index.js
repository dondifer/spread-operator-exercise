const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const { name: nameAna, email: emailAna } = empleados.filter(
  (el) => el.name === "Ana"
)[0];
console.log(nameAna);
console.log(emailAna);
console.log("--------------------------------");

const { email: emailLuis } = empleados.filter((el) => el.name === "Luis")[0];
console.log(emailLuis);
console.log("--------------------------------");

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

const { name: nombre, type, moves } = pokemon;

console.log(nombre);
console.log(type);
console.log(moves[1]);

const pikachu = {
  namep: "Pikachu",
  typep: "electric",
  abilityp: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  statsp: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  movesp: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const fusion = { ...pokemon, ...pikachu };
console.log(fusion);
console.log("--------------------------------");

const sumEveryOther = (...args) => args.reduce((sum, b) => sum + b);

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

const addOnlyNums = (...args) =>
  args.filter((n) => typeof n === "number").reduce((sum, b) => sum + b);

console.log(addOnlyNums(1, "perro", 2, 4)); //7)

const countTheArgs = (...args) => args.length;

console.log(countTheArgs("gato", "perro")); //2)
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2];

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaMañana } = HIGH_TEMPERATURES;

console.log("maxHoy", maximaHoy);
console.log("maxManiana", maximaMañana);

const onlyUniques = (...args) => {
  const uniqueFunc = [];
  args.forEach((value) => {
    if (uniqueFunc.indexOf(value) === -1) {
      uniqueFunc.push(value);
    }
  });
  return uniqueFunc;
};

console.log("addOnlyUniques", onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log("addOnlyUniques", onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

const combineAllArrays = (...args) =>
  args.reduce((allArray, array) => [...allArray, ...array]);

console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

const sumAndSquare = (...args) => {
  let sum = 0;
  args.forEach((el) => {
    sum += el ** 2;
  });
  return sum;
};

console.log(sumAndSquare(2, 5)); //29
