import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello I am Digbijaya</h1>");
    res.sendStatus(100);
})


app.get("/about", (req, res) => {
    res.send("<h1>This is about page..</h1>");
    res.sendStatus(200);
})

app.post("/contact", (req, res) => {
    res.send("<h1>This is contact page..</h1>");
    res.sendStatus(200);
})

app.put("/update", (req, res) => {
    res.send("<h1>This is update page..</h1>");
    res.sendStatus(200);
})

app.patch("/patch", (req, res) => {
    res.send("<h1>This is patch page..</h1>");
    res.sendStatus(200);
})

app.delete("/delete", (req, res) => {
    res.send("<h1>This is delete page..</h1>");
    res.sendStatus(200);
})
app.listen(port, () => {
    console.log("server is running on port 3000");
})