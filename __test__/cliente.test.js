// __tests__/index.test.js
describe('initial', () => {
    test('first tests', () => {
      expect(true).toBe(true)
    })
  })

// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
    expect(1).toBe(2)
  })

/* 
const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
}) */