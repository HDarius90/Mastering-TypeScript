// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("SECRET METHOD!!!")
//   }
// }

// const zenda = new Player("Zenda", "Hadji");
// zenda.first = "Dari";
// zenda.score = 10;
// zenda.secretMethod();

// Parameter propertys alias shortcuts

class Player {
  // public readonly first: string;
  // public readonly last: string;
  // private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  isAdmin: boolean = true;
  maxscore() {
    this._score = 9999999999;
  }
}

const zenda = new Player("Zenda", "Hadji", 100);
const dari = new SuperPlayer("Dari", "Hadji", 100);
// zenda.fullName = "Dari"
// dari._score = 999;
dari.maxscore;

//Classes and Interfaces

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const newbike = new Bike("red");

// Creating Abstract Classes

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet(): void {
    console.log("hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salery: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salery;
  }
}
class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const sziszi = new FullTimeEmployee("Szilvia", "Medveczky", 250000);
console.log(sziszi.getPay());

const darius = new PartTimeEmployee("Darius", "Hadjati", 100, 20000);
console.log(darius.getPay());

