// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    test("Musicians - check status", async () => {
        const response = await request(app).get("/Musicians");
        expect(response.status).toBe(200);
    })
    
    test("Test data", async () => {
        const response = await request(app).get("/users/1"); 
        console.log(response.body);
        expect(response.body).toEqual(["Johnny", "Andy", "Simon"])
    })
})
