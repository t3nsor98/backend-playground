import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Necessary for resolving paths in ES modules
import ejs from "ejs";

const app = express();
const port = 3000;


app.get("/", (req, res) => {

    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "weekend";
        adv = "it's time to relax";
    }
    
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});