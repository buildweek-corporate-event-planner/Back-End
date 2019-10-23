const request = require('supertest');
const server = require('../../server');

describe('This is to make sure everything is in testing', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await db('events').truncate();
        await request(server).post('/api/auth/register').send({email: 'test', password: 'test', role: 'test', company: 'test'})
    })
})

describe('/api/events', () => {
    it('GET /api/events/users/:id', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/events/user/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/events', () => {
    it('POST /api/events/', async () => {
        const res = await request(server)
        .post('/api/auth/login').send({
            email: 'test',
            password: 'test'
        }) 

        const totalRes = await request(server)
          .post('/api/events/').send(
              {
              event_name: "Anglea's Birthday Party",
              description: "Party for Anglea's Birthday",
              budget: 100,
              event_date: "2019-11-10",
              event_time: "12:00",
              assigned_to_user: 1
           })
          .set("Authorization", res.body.token)
        //   expect(totalRes.status).toBe(201)
        console.log(totalRes)
    })
})

describe('/api/events', () => {
    it('PUT /api/events/', async () => {
        const res = await request(server)
        .post('/api/auth/login').send({
            email: 'test',
            password: 'test'
        }) 

        const totalRes = await request(server)
          .put('/api/events/1').send(
              {
              event_name: "Anglea's Birthday Party",
              description: "Party for Anglea's Birthday",
              budget: 150,
              event_date: "2019-11-10",
              event_time: "12:00",
              assigned_to_user: 1
           })
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/events', () => {
    it('DELETE /api/events/', async () => {
        const res = await request(server)
        .post('/api/auth/login').send({
            email: 'test',
            password: 'test'
        }) 

        const totalRes = await request(server)
          .delete('/api/events/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})