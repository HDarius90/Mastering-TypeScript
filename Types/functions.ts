// function greet(person: string) {
//   return `Hello ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("Tamás");
doSomething("ChickenFace", 78, true);

function greet(person: string = "stranger"): string {
  return `Hello ${person}!`;
}

greet();
greet("Sziszi");

function square(num: number): number {
  return num * num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

// function rando(num: number) {
//   if (Math.random() < 0.5) {
//     return num.toString();
//   }
//   return num;
// }

const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toFix();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  return "";
}

function makeErrir(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
