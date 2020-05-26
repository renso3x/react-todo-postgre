const request = require('supertest')
const app = require('../../../index');

describe('Todo API', () => {
  it('should fetch all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(3);
    expect(res.body[0]).toHaveProperty('subtasks');
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'test is cool' })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('title')
  });

  it('should update a todo', async () => {
    const res = await request(app)
      .put('/todos/1')
      .send({ status: 'completed' });

    expect(res.statusCode).toEqual(200);
  });

  it('should throw error if invalid todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ status: 'pending' })
    expect(res.statusCode).toEqual(422)
  });

  it('should thor error if todo is not found', async () => {
    const res = await request(app).get('/todos/100')
    expect(res.statusCode).toEqual(404);
  });

  it('should create a subtask', async () => {
    const res = await request(app)
      .post('/todos/subtask')
      .send({
        title: 'awesome subtask',
        todoId: 1
      });

    expect(res.statusCode).toEqual(200);
  });

  it('should update a subtask', async () => {
    const res = await request(app)
      .put('/todos/subtask/1')
      .send({ status: 'completed' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'completed');
  });

  it('should thor error if subtask is not found', async () => {
    const res = await request(app).get('/todos/subtask/51')
    expect(res.statusCode).toEqual(404);
  });
})