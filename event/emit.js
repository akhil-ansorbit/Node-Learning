const EventEmmiter = require("events");

const event = new EventEmmiter();

event.on("sayName", () => {
  console.log("My name is John Doe");
});
event.emit("sayName");

event.on("checkpage", (sc, msg) => {
  console.log(`your Status code is ${sc} and your message is ${msg}`);
});
event.emit("checkpage", 200, "Done");
