import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello I am Digbijaya</h1>");
})

app.listen(port, () => {
    console.log("server is running on port 3000");
})