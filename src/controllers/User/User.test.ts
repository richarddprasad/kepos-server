// TODO: Implement Jest lifecycle methods
import request from "supertest";
import { app } from "../../server";

test('Should get 200 response code', async () => {
  const result = await request(app)
    .get('/users')
    .expect(200, (err) => {
      // console.log(err);
    });
});
