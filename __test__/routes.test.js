const app = require('../App');
const supertest = require('supertest');
const request = supertest(app);
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const config = require('../config')

process.env.NODE_ENV = 'test';

const getRoute = route => `http://localhost:8080${route}`
//--------pablo
it('clientes...', done => {
    request
        .get(getRoute('/cliente'))
        .end(function () {
            //console.log('end')
            done()
        })
})
//-------

it('gets cliente 2',  done => {
    //console.log(request.get('/cliente'))
    const response = request.get(getRoute('/cliente'))
    //console.log(response.statusCode)
    //console.log(response)
    request
    .get(getRoute('/cliente'))
    .end(function () {
        //console.log(request.get(getRoute('/cliente')))
        done()
    }) 
    //const response = request.get('/cliente')
    //expect(response.status).toBe(200)
    //expect(response.body.message).toBe('pass!')
    done()
}) 

it('gets the test endpoint', async done => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
})

it('gets the test endpoint', async done => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
})

it('gets the test endpoint Main', async done => {
    const response = await request.get('/')
    //console.log('xxxxxxx ', response)
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Bienvenido!')
    done()
})

it('gets the test endpoint pedido', async done => {
    const response = await request.get('/pedido')
    //console.log('xxxxxxx ', response)
    expect(response.status).toBe(500)
    expect(response.text).toBe('Error en la peticion')
    done()
})



/* 
describe('insert', () => {
    let connection;
    let db;
  
    beforeAll(async () => {
      connection = await MongoClient.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      db = await connection.db();
    });

    afterAll(async () => {
      await connection.close();
    });
});
 
    */