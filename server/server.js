const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando");
});

app.get("/tarefas", (req, res) => {
    res.json([]);
});

app.post("/tarefas", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});