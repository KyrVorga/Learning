const fs = require("fs");
const data = require("./data.json");

function file() {
  console.log(data.name);
  fs.readFile("./data.json", "utf-8", (err, data) => {
    let nata = JSON.parse(data);
    console.log(nata.name);
  });
}

function directory() {
  fs.readdir("c:/", (err, data) => {
    console.log(data);
  });
}

function write() {
  const data = {
    name: "bob",
  };
  fs.writeFile("wata.json", JSON.stringify(data), (err) => {
    console.log("done", err);
  });
}

// write();  //Dont run this, infinite writing
// directory();
// file();
