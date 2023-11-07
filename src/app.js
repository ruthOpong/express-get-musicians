const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians/:id', async (request, response) => {
    let musicId = request.params.id;
    let music = await Musician.findByPk(musicId);
    console.log(music);
    response.json(music);
})





module.exports = app;