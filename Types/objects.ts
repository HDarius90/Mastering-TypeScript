function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Darius", last: "Hadjati" });

// let coordinate: { x: number; y: number } = {
//   x: 35,
//   y: 2,
// };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: "Mick", last: "Jagger", age: 473 });
const singer = { first: "Mick", last: "Jagger", age: 473, isAllive: true };
printName(singer);

// Type Aliases

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = {
//   x: 35,
//   y: 2,
// };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

type MyNum = number;
// let age: MyNum = 32;

// Nested Objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Sweet Child O' Mine",
  artist: "Guns N’ Roses",
  numStreams: 1000000000,
  credits: {
    producer: "Mike Clink",
    writer: "Guns N' Roses",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// Optional Properties

// type Point = {
//   x: number;
//   y: number;
//   z?: number;
// };

let myPoint: Point = {
  x: 35,
  y: 2,
};

// The readonly Modifier

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 123,
  username: "Zenda",
};

// user.id = 246;

// Intersection Types

type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 12,
  color: "Yellow",
};

type Cat = {
  numLievs: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const animal: CatDog = {
  numLievs: 8,
  breed: "Husky",
  age: 10,
};
