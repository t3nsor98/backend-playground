import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Necessary for resolving paths in ES modules

const app = express();
const port = 3000;

// Simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const VALID_PASSWORD = "secret123";

app.post("/login", (req, res) => {
  const { password } = req.body;

  if (password === VALID_PASSWORD) {
    res.sendFile(path.join(__dirname, "public", "secrets.html"));
  } else {
    res.send("Incorrect password. Please try again.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
