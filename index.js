console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
setImmediate(() => {
  console.log("hello Set Immediate ");
});
process.nextTick(() => {
  console.log("next Tick");
});
new Promise((res, rej) => {
  res("Hello");
}).then((data) => console.log("hello promise", data));

//Event Loop has Some Phases

// 1. Timers -  Time Related Like Set Timeout
// 2. Pending Callbacks -------------------------
// 3. Poll ------ File System Related , Network , data base callbacks
// 4. Check -- Set Immediate
// 5. Close Callbacks
