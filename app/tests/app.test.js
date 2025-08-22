import request from "supertest";
import express from "express";
import { jest } from "@jest/globals";

const buildApp = () => {
  const app = express();
  app.get("/", (req, res) => res.json({ ok: true }));
  return app;
};

test("GET / returns ok", async () => {
  const app = buildApp();
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.body.ok).toBe(true);
});
