const request = require('supertest');
const server = require('../../server');

describe('This is to make sure everything is in testing', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await request(server).post('/api/auth/register').send({email: 'test', password: 'test', role: 'test', company: 'test'})
    })
})

describe('/api/vendors', () => {
    it('GET /api/vendors', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/vendors/')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/vendors', () => {
    it('GET /api/vendors', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/vendors/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/vendors', () => {
    it('GET /api/vendors', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/vendors/events/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

// describe('/api/vendors', () => {
//     it('Post /api/vendors', async () => {
//         const res = await request(server)
//           .post('/api/auth/login').send({
//               email: 'test',
//               password: 'test'
//           })
        
//         const totalRes = await request(server)
//           .post('/api/vendors/').send(
//             {
//                 vendor_name: "Costco",
//                 assigned_to_event: 1
//             }
//           )
//           .set("Authorization", res.body.token)
//           expect(totalRes.status).toBe(200)
//     })
// })

describe('/api/vendors', () => {
    it('PUT /api/vendors', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .put('/api/vendors/2').send(
            {
                vendor_name: "Costco",
                assigned_to_event: 1
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/vendors', () => {
    it('DELETE /api/vendors', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .delete('/api/vendors/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})