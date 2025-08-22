import test from "node:test";
import assert from "node:assert";
import express from "express";
import request from "supertest";

const app = express();
app.get("/", (req, res) => res.json({ ok: true }));

test("GET / returns ok", async () => {
  const res = await request(app).get("/");
  assert.strictEqual(res.statusCode, 200);
  assert.strictEqual(res.body.ok, true);
});

