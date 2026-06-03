import dotenv from "dotenv";
dotenv.config();
console.log(process.cwd());
console.log(process.pid);
console.log(process.env.PORT);
console.log(process.argv[0]);
console.log(process.argv[1]);
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log(a + b);
