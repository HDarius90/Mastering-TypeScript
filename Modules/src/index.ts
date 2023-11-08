import { add, sample as randomSample, pi } from "./utils.js"; // named export
/* import thingy from "./User.js"; // deafult export
import { userHelper } from "./User.js";  */
import User, { userHelper } from "./User.js";

const sample = 121212;
console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));
console.log(pi);
userHelper();
