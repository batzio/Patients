const axios = require('axios').default;
const express = require('express');
const app = express();

// app.use('/assets',express.static('asserts'))

app.use(express.static('static'));
app.use('/', express.static('index.html'));
const port = process.env.PORT || 3005;
app.listen(port);

patients = [];

app.use(express.json());

app.post("/patient", (req, res) => {
    // console.log("on server")
    // console.log(req.body);
    patients.push(req.body);
    res.send(patients);
    console.log(patients);

});

// console.log(patients);

app.get("/patient", (req, res) => {
    // console.log(patients);
    console.log(patients);
    // console.log(notes)
    // let id = req.params.id
    // paci = patients.find(n => n.num == id)
    res.send(patients);
});


// app.get("/patient", (req, res) => {
//     // console.log(patients);
//     // console.log(patients);
//     // console.log(notes)
//     let id = req.params.id;
//     let paci = patients.find(n => n.num == id);
//     res.send(paci);
// });

