const express = require("express");
const port = 5000;
const app = express();

app.use(express.static(__dirname));
// app.listen(port, () => {
//   console.log(`server started on port ${port}`);
// });

const messages = [
  { name: "tim", message: "hello" },
  { name: "brad", message: "hey" },
];

app.get("/messages", (req, res) => {
  res.send("hello");
});

const server = app.listen(port, () => {
  console.log("server started on port", server.address().port);
});
