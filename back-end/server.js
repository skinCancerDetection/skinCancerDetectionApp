const express = require("express");
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
