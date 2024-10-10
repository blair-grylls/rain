import request from "supertest";
import { app } from "../app";
import { getExampleById } from "../services/example.service";

// //! Unit tests
// describe("getExampleById", () => {
//   it("should return the correct example when the id exists", async () => {
//     const result = await getExampleById(1);
//     expect(result).toEqual({ name: "Alice", age: 28, id: 1 });
//   });
//   it("should return null when the id does not exist", async () => {
//     const result = await getExampleById(999);
//     expect(result).toBeNull();
//   });
// });

//! Integration tests
describe("/GET /api/invoices", () => {
  it("returns invoices for valid userId", async () => {
    const res = await request(app).get("/api/invoices").query({
      userId: 1,
    });
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
  });
  // it("returns 404 for invalid exampleId", async () => {
  //   const res = await request(app).get("/api/example").query({
  //     exampleId: 100,
  //   });
  //   expect(res.statusCode).toEqual(404);
  //   expect(res.body).toEqual({ error: "Example not found." });
  // });
});
