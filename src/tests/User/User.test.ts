import request from 'supertest';
import { getConnection } from 'typeorm';
import { connectToDb } from '../db';
import { app } from '../../server';

beforeAll(() => {
    return connectToDb();
});

afterAll(() => {
    return getConnection().close();
});

test('200 OK response from /users', async () => {
    await request(app)
    .get('/users')
    .expect(200);
});