import chalk from "chalk";
import mul, { add, sub } from "./math.js";

console.log(chalk.bold.green("Hello There").bg);

console.log(chalk.bgBlue("Hello"));
console.log(mul(10, 20));
console.log(add(10, 20));
