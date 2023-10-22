let age: string | number = 21;

age = 24;
age = "25";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinate: Point | Loc = { x: 1, y: 34 };
coordinate = { lat: 321.213, long: 45.782 };

// Type Narrowing w/ Union Types

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = price.replace("$", "");
  } else {
    price * tax;
  }

  // return price * tax;
}

// Union Types and Arrays

// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, "asd", {}];

const stuff: (number | string)[] = [1, 2, "3"];
const stuff2: number[] | string[] = [1, 2];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.123, long: 43.456 });
coords.push({ x: 123, y: 43 });

// Literal Types

let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Friday";
