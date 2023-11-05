//Generics

// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

// Another Example Of A Built-In Generic

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// Writing Our First Generic

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}
// function identity(item: any): any{     // there is no relationship between input and output types
//     return item;
// }

interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}
// identity<number>(7);
// identity<string>("hello");
// identity<Cat>({})

// Writing Another Generic Function

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<number>([10, 2, 5, 87, 22]);

// Inferred Generic Type Parameters

getRandomElement(["a", "b", "c"]);
getRandomElement([10, 2, 5, 87, 22]);

// Generics With Multiple Types

function merge<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: "Dari" }, { age: 33, family: "father" });

// Adding Type Constraints

interface Lengthy {
  length: number;
}

function doubleLength<T>(thing: Lengthy): number {
  return thing.length * 2;
}
// function doubleLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }
doubleLength("asd");
// doubleLength(234);

// Default Type Parameters

function makeEmptyList<T = string>(): T[] {
  return [];
}

const array = makeEmptyList();

// Writing Generic Classes

interface Song {
  title: string;
  artist: string;
}

interface Vide {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const asd = new Playlist<Vide>();
asd.add();
