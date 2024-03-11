const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            let { body } = await agent.get('/rickandmorty/character/1');
            expect(body).toHaveProperty('id'&&'name'&&'gender'&&'status'&&'origin'&&'image');
        });

        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/25639').expect(500);
        });
    });

    describe('GET /rickandmorty/login', ()=>{
        it('Con el login correcto debe retornar access:true', async ()=>{
            let { body } = await agent.get('/rickandmorty/login?email=batman@gmail.com&password=robin1234');
            expect(body.access).toBeTruthy();
        });
        it('Con el login incorrecto debe retornar access:false', async ()=>{
            let { body } = await agent.get('/rickandmorty/login?email=batman@gmail.com&password=robin1243');
            expect(body.access).toBeFalsy();
        });
    });

    describe('POST /rickandmorty/fav', ()=>{
        //creo personaje ficticio
        let fakeBody = {
            id:25,
            name:"Batman Sanchez",
            gender:"Male",
            species:"BAT",
            origin: "SAD",
            image:"SOME URL",
            status:"ALIVE"
        }
        let fakeBody2 = {
            id:27,
            name:"Batman Lopez",
            gender:"Male",
            species:"BAT",
            origin: "SAD",
            image:"SOME URL",
            status:"ALIVE"
        }
        it('Debe retornar el body como arreglo', async ()=>{
            const { body } = await agent.post('/rickandmorty/fav').send(fakeBody);
            expect(body[0]).toEqual(fakeBody);
        });
        it('Debe retornar los personajes previos', async ()=>{
            const { body } = await agent.post('/rickandmorty/fav').send(fakeBody2);
            expect(body).toEqual([fakeBody, fakeBody2]);
        });
    });
});