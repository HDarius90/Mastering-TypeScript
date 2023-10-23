// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 50, y: 60 };

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 50, y: 60 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi(): string;
  sayHi: () => string;
}

const thomas: Person = {
  id: 5,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: () => {
    return "Hi";
  },
};

thomas.first = "Chad";
// thomas.id = 6;

interface Product {
  name: string;
  price: number;
  applyDicount(discount: number): number;
}

const shoes: Product = {
  name: "Adidas Allstar",
  price: 100,
  applyDicount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDicount(0.4));

// Reopening Interfaces

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const bonnie: Dog = {
  name: "Bonnie",
  age: 8,
  breed: "German Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

// Extending Interfaces

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "drug sniffer",
};

// Interface Multiple Inheritance

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const kurosh: Engineer = {
  name: "Kurosh",
  id: 1,
  email: "persian@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};


