# Atlas IDP 🚀  
### From Code to Cloud — Instantly

Atlas IDP is an Internal Developer Platform (IDP) that enables developers to create, deploy, and manage applications with built-in GitHub automation, CI/CD pipelines, and scalable infrastructure.

---

## 🚧 Status

Actively building Atlas IDP with core functionality implemented. Currently expanding into cloud deployment (AWS), CI/CD enhancements, and observability features.

---

## ✨ Features

- 🚀 One-click project creation  
- 📦 Automated GitHub repository creation  
- 🧩 Template-based project scaffolding (TypeScript Node app)  
- ⚙️ Backend automation using Node.js  
- 🎨 Developer-friendly UI built with React + TypeScript  

---

## 🏗️ Architecture

Frontend (React) → Backend (Node.js) → GitHub API → Repository Creation → Template Push → CI/CD Pipeline

---

## 🔄 Workflow

1. User enters project name  
2. Clicks **Create Project**  
3. Backend service:
   - Creates a GitHub repository  
   - Clones the repository  
   - Copies predefined template  
   - Pushes initial code  
4. Repository is ready with a working application and CI/CD setup  

---

## 🛠️ Tech Stack

- React + TypeScript (Frontend)  
- Node.js + Express (Backend)  
- GitHub REST API  
- simple-git  
- dotenv  

---

## 🚀 Future Enhancements

- Preview environments for each PR  
- DevSecOps pipeline (Trivy, SonarQube)  
- AWS deployment (ECS / Fargate)  
- Monitoring & cost visibility dashboard  

---

## 🎯 Vision

To build a self-service platform that improves developer productivity by automating infrastructure, deployment, and workflows.

---

## 👩‍💻 Author

Built as part of a Platform Engineering portfolio.
