function greet(callback) {
  console.log("Hello This is the Greet Function");
  callback();
}

setTimeout(() => greet(() => console.log("This is the Calllback Fn")), 5000);
