const app = require('../App') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)



  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
  
    // ...
    done()
  })

  it('gets the test endpoint two', async done => {
    const response = await request.get('/test')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
  })