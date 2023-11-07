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
        const response = await request(app).get("/Musicians/1");
        const responseData = await JSON.parse(response.text);
        expect(responseData).toBe('{"bandId": null, "createdAt": "2023-11-07T11:25:51.565Z", "id": 1, "instrument": "Voice", "name": "Mick Jagger", "updatedAt": "2023-11-07T11:25:51.565Z"}')
    })
})
