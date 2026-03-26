const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Helper functions
const readData = (file) => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", file))
  );
};

const writeData = (file, data) => {
  fs.writeFileSync(
    path.join(__dirname, "data", file),
    JSON.stringify(data, null, 2)
  );
};

//////////////////////
// ROUTES
//////////////////////

// GET
app.get("/api/stories", (req, res) => {
  res.json(readData("stories.json"));
});

app.get("/api/proverbs", (req, res) => {
  res.json(readData("proverbs.json"));
});

app.get("/api/media", (req, res) => {
  res.json(readData("media.json"));
});

app.get("/api/school", (req, res) => {
  res.json(readData("school.json"));
});

// POST
app.post("/api/stories", (req, res) => {
  const data = readData("stories.json");
  data.push(req.body);
  writeData("stories.json", data);
  res.json({ message: "Story added successfully!" });
});

app.post("/api/media", (req, res) => {
  const data = readData("media.json");
  data.push(req.body);
  writeData("media.json", data);
  res.json({ message: "Media added successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});