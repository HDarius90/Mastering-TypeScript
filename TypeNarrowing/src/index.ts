// Typeof Guards

function triple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guards

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DIDNT PASS IN A WORD!");
  }
};

// Equality Narrowing

function someDemo(x: string | number, b: string | boolean) {
  if (x === b) {
    x.toUpperCase();
  }
}

// Narrowing With The In Operator

interface Moovie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisode: number;
  episodeDuration: number;
}

function getRuntime(media: Moovie | TVShow) {
  if ("duration" in media) {
    return media.duration;
  } else {
    return media.numEpisode * media.episodeDuration;
  }
}

console.log(getRuntime({ title: "Fight Club", duration: 161 }));
console.log(
  getRuntime({
    title: "How I Met Your Mother",
    numEpisode: 200,
    episodeDuration: 20,
  })
);

// Instanceof Narrowing

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    return date.toUTCString();
  } else {
    return new Date(date).toUTCString();
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function prtintName(person: User | Company) {
  if (person instanceof Company) {
    person;
  } else {
    person;
  }
}

// Working With Type Predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal;
    return "MEOW";
  } else {
    animal;
    return "WOF";
  }
}

// Discriminated Unions

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

// type FarmAnimal = Pig | Cow | Rooster;

// function getFarmAnimalSound(animal: FarmAnimal) {
//   switch (animal.kind) {
//     case "pig":
//       return "Oink!";
//     case "cow":
//       return "Moooo!";
//     case "rooster":
//       return "Cockadoodledoo";
//   }
// }

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));

// Exhaustiveness Checks With Never

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cockadoodledoo";
    case "sheep":
      return "Baaa!";
    default:
      // We should never make it here, if we handled all case correctly
      //   const shouldNeverGetHere: never = animal;
      //   return shouldNeverGetHere
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Cow | Rooster | Sheep;
