const fs = require("node:fs");

console.log("Leyendo el primero archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});
console.log('Hacer cosas mientras lee el archivo ... ');


console.log("Leyendo el 2do archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
    console.log(text)
});

