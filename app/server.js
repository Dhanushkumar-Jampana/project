import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.json({ ok: true, msg: "Hello from CI/CD demo" }));
app.get("/health", (req, res) => res.send("OK"));
app.get("/version", (req, res) => res.json({ version: process.env.APP_VERSION || "dev" }));

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
