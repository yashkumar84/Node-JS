const url = require("url");

const myUrl = new URL("http://localhost:3000/search?q=shoes");

console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.protocol);
console.log(myUrl.port);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams.get("q"));

myUrl.searchParams.append("page", "1");
console.log(myUrl);
