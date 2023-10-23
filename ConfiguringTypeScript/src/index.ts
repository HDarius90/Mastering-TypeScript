interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 4,
};

// function doSomething(thing) {
//   console.log(thing);
// }

let users: string[] | null = ["asd", "asd"];
users = null;
