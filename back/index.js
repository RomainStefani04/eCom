const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors()); 
app.use(express.json());

// Servir les fichiers du dossier "front"
app.use(express.static(path.join(__dirname, "../front")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front/index.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});