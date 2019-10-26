const app = require('../App') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)



  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')
  
    // ...
    done()
  })