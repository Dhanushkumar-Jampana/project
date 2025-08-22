# 🚀 CI/CD Demo Project

This project demonstrates a **Node.js application** containerized with **Docker**, and deployed using a **CI/CD pipeline on GitHub Actions**.  
The pipeline builds, tests, and pushes the Docker image to Docker Hub automatically.

---

## 📂 Project Structure

ci-cd-demo/
├─ app/
│ ├─ server.js # Node.js application
│ ├─ package.json # Project metadata & dependencies
│ ├─ tests/app.test.js # Basic test
│ ├─ Dockerfile # Docker build instructions
│ └─ .dockerignore
├─ docker-compose.yml # Docker compose setup
└─ .github/workflows/ci-cd.yml # CI/CD workflow



## ⚙️ CI/CD Workflow

- Runs on every push to **main** branch.
- Steps:
  1. Checkout code  
  2. Install dependencies  
  3. Run tests  
  4. Build Docker image  
  5. Push image to **Docker Hub**

---

---

## ▶️ Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Dhanushkumar-Jampana/project.git
   cd ci-cd-demo

Run with Docker:
docker run -d -p 3000:3000 --name ci-cd-demo dhanushjampana/ci-cd-demo:latest
Open in browser:
http://localhost:3000

Expected output:
{
  "ok": true,
  "msg": "Hello from CI/CD demo"
}
