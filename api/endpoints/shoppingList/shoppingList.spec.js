const request = require('supertest');
const server = require('../../server');

describe('This is to make sure everything is in testing', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await request(server).post('/api/auth/register').send({email: 'test', password: 'test', role: 'test', company: 'test'})
    })
})

describe('/api/shopping', () => {
    it('GET /api/shopping', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/shopping/')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('GET /api/shopping', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/shopping/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('GET /api/shopping', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/shopping/events/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('GET /api/shopping', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .get('/api/shopping/listItems/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('POST /api/shopping/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .post('/api/shopping/').send(
            {
                list_name: "hello",
                assigned_to_event: 1
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('POST /api/shopping/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .post('/api/shopping/listItem').send(
            {
                list_item: "hello2",
                purchased: false,
                assigned_to_shoppingList: 2
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('PUT /api/shopping/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .put('/api/shopping/1').send(
            {
                list_name: "hello1",
                assigned_to_event: 1
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('PUT /api/shopping/1', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .put('/api/shopping/listItem/1').send(
            {
                list_item: "hello2",
                purchased: false,
                assigned_to_shoppingList: 2
            }
          )
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(200)
    })
})

describe('/api/shopping', () => {
    it('DELETE /api/shopping', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .delete('/api/shopping/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})

describe('/api/shopping', () => {
    it('DELETE /api/shopping', async () => {
        const res = await request(server)
          .post('/api/auth/login').send({
              email: 'test',
              password: 'test'
          })
        
        const totalRes = await request(server)
          .delete('/api/shopping/listItem/1')
          .set("Authorization", res.body.token)
          expect(totalRes.status).toBe(204)
    })
})