import request from "supertest";
import { app } from "../../server";

test('Should get 200 response code', async () => {
  const result = await request(app)
    .get("/")
    .expect(200);
});
