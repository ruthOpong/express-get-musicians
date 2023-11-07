const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians/:id', async (request, response) => {
    let musicId = request.params.id;
    let music = await Musician.findByPk(musicId);
    console.log(music);
    response.json(music);
})

app.post('/musicians/:id', async (request, response) => {
    await Musician.create(request.body);
    response.send("resource successfully updated");
})

app.put('/musicians/:id', async (request, response) => {
    let musicId = request.params.id;
    let music = await Musician.findByPk(musicId);
    await music.update(request.body);
    response.send("resource successfully updated");
})

app.delete('/musicians/:id', async (request, response) => {
    let musicId = request.params.id;
    let music = await Musician.findByPk(musicId);
    music.destroy();
    response.send("resource successfully deleted");
})



module.exports = app;