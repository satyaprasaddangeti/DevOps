const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to write data to a file in the volume
app.post("/write", (req, res) => {
  const data = req.body.data;
  const filePath = path.join("/data", "output.txt");

  fs.writeFileSync(filePath, data, "utf8");
  res.send(`Data written to ${filePath}`);
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Docker Sample Project!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

