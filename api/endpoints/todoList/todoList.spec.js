const request = require('supertest');
const server = require('../../server');

describe('This is to make sure everything is in testing', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await request(server).post('/api/auth/register').send({email: 'test', password: 'test', role: 'test', company: 'test'})
    })
})

describe('/api/todo', () => {
    it('GET /api/todo', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/todo/')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('GET /api/todo', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/todo/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('GET /api/todo', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/todo/events/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('GET /api/todo', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/todo/listItems/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('POST /api/todo/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .post('/api/todo/').send(
            {
                list_name: "hello",
                assigned_to_event: 1
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('POST /api/todo/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .post('/api/todo/listItem').send(
            {
                list_item: "hello2",
                completed: false,
                assigned_to_todoList: 2
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('PUT /api/todo/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .put('/api/todo/1').send(
            {
                list_name: "hello1",
                assigned_to_event: 1
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('PUT /api/todo/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .put('/api/todo/listItem/3').send(
            {
                list_item: "hello2",
                completed: false,
                assigned_to_todoList: 2
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/todo', () => {
    it('DELETE /api/todo', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .delete('/api/todo/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})

describe('/api/todo', () => {
    it('DELETE /api/todo', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .delete('/api/todo/listItem/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})