const users: string[] = ["Dari", "Sziszi", "Zenda"];
users.push("Nyunyu");

const ageList: number[] = [45, 56, 13];
ageList[0] = 12;
// ageList[0] = "asd";

// More Array Syntax

// const bools: Array<boolean> = [];
const bools: boolean[] = [];

type Pointer = {
  x: number;
  y: number;
};

const coords: Pointer[] = [];
coords.push({ x: 12, y: 13 });
// coords.push({ x: 12, y: "13" });

// Multidimensional Arrays

const tiktakto: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]];
