import os from "os";

console.log(os.tmpdir());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.hostname());
console.log(os.freemem() / (1024 * 1024 * 2400));
console.log(os.totalmem() / (1024 * 1024 * 2400));
console.log(os.machine());
console.log(os.uptime() / 60);
console.log(os.type());
console.log(os.release());
console.log(os.userInfo());
