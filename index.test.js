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
        const response = await request(app).get("/Musicians");
        const responseData = await JSON.parse(response.text);
        console.log(responseData);
        expect(responseData).toBe('[{"id":1,"name":"Mick Jagger","instrument":"Voice","createdAt":"2023-11-06T11:42:20.249Z","updatedAt":"2023-11-06T11:42:20.249Z","bandId":null},{"id":2,"name":"Drake","instrument":"Voice","createdAt":"2023-11-06T11:42:20.250Z","updatedAt":"2023-11-06T11:42:20.250Z","bandId":null},{"id":3,"name":"Jimi Hendrix","instrument":"Guitar","createdAt":"2023-11-06T11:42:20.250Z","updatedAt":"2023-11-06T11:42:20.250Z","bandId":null}]')
    })
})