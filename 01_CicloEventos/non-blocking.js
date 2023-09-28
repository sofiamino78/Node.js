import { readFile } from "fs";

console.log("Inicio del programa");

readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Fin del programa");