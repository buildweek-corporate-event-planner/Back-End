const request = require('supertest');
const server = require('../../server');

describe('This is to make sure everything is in testing', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await request(server).post('/api/auth/register').send({email: 'test', password: 'test', role: 'test', company: 'test'})
    })
})

describe('/api/users', () => {
    it('GET /api/users', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/users/')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/users', () => {
    it('GET /api/users', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/users/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/users', () => {
    it('PUT /api/users', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .put('/api/users/1').send(
            {
                email: "jim@dundermifflinpaperco.com", 
                password: "jim321", 
                role: "sales",
                company: "Dunder Mifflin Paper Co"
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/users', () => {
    it('DELETE /api/users', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .delete('/api/users/2')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})