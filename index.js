const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.json({
    msg: "Hello render"
  })
})

app.listen(3000, () => {
  console.log("Server is on ");
})