import EventEmitter from "events";
const emitter = new EventEmitter();

emitter.on("login", (name) => {
  console.log(`Login Successfull Welcome ${name}`);
});

setTimeout(() => {
  emitter.emit("login", "Yash");
}, 4000);
