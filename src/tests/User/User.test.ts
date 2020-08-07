import request from 'supertest';
import { connectToDb } from '../db';
import { getConnection } from 'typeorm';
import { app } from '../../server';

beforeAll(() => {
    return connectToDb();
});

afterAll(() => {
    return getConnection().close();
});

test('Fetch all users: 200 response from GET /users', async () => {
    await request(app)
    .get('/users')
    .expect(200);
});

test('Create new user: 201 response from POST /users', async () => {
    await request(app)
    .post('/users')
    .expect(201);
});