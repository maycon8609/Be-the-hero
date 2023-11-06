import request from 'supertest'

import app from '../../src/app.js'
import connection from '../../src/database/connection.js'

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('verificar se e possivel criar uma nova ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD',
        email: 'apad0@gmail.com',
        whatsapp: '86999999999',
        city: 'teresina',
        uf: 'pi'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
