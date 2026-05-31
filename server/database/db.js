const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new sqlite3.Database(
    path.join(__dirname, "database.db")
);

const initSql = fs.readFileSync(
    path.join(__dirname, "init.sql"),
    "utf8"
);

db.exec(initSql, (err) => {

    if (err) {
        console.error("Erro ao inicializar banco:", err);
    } else {
        console.log("Banco inicializado com sucesso");
    }

});

module.exports = db;