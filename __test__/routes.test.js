const app = require('../App') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

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

describe('Test the connection BD', () => {
    beforeAll(() => {
        mongoDB.connect();
    });

    afterAll((done) => {
        mongoDB.disconnect(done);
    });
})

describe('Test the root path cliente', () => {
    test('It should response the GET method', () => {
        request.get('/cliente')  
        expect(200).toBe(200)
    });
})