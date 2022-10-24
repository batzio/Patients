const axios = require('axios').default;
const express = require('express');
const app = express();

app.use(express.static('static'));
app.use('/', express.static('index.html'));
const port = process.env.PORT || 3005;
app.listen(port);

let patients = new Array();

app.use(express.json());

app.post("/patient", (req, res) => {
    patients.push(req.body);
    res.send(patients);
});

app.get("/patients", (req, res) => {
    res.send(patients);
});

app.get("/patient", (req, res) => {
    pac = patients[req.query.elemId];
    res.send(pac);
});

app.put("/patient", (req, res) => {
    patients[req.query.elemId] = req.body;
    res.send(pac);
});



