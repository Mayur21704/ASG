import express from "express";
import os from "os";
export const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/cpu", (req, res) => {
    let randomVal = 0;
    for (let i = 0; i < 1000000000; i++) {
        randomVal = Math.random();
    }
    res.send(`${randomVal}`);
});


app.get("/host", (req, res) => {
    res.send(os.hostname());
});
