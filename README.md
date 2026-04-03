# autodeploy-ec2-docker

This is a **React frontend application** built with Vite, designed for automated deployment to **AWS EC2** using **Docker** and versioned images. Each deployment is tagged with a version number from the `VERSION` file for easy rollback.  

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
4. [Docker Setup](#docker-setup)  
5. [Versioning](#versioning)  
6. [GitHub Actions CI/CD](#github-actions-cicd)  
7. [Deployment on EC2](#deployment-on-ec2)  
8. [Social Links](#social-links)  

---

## Project Overview

This app serves as a **personal bio card**:  
- Displays **basic info**: name, experience, skills  
- Shows **social links**: Instagram, Twitter, LinkedIn, GitHub, Portfolio  
- Displays **current app version dynamically** from a `VERSION` file  
- Fully **responsive** and designed for a professional look  

---

## Tech Stack

- **Frontend:** React, Vite  
- **Styling:** Inline CSS (responsive)  
- **Containerization:** Docker  
- **CI/CD:** GitHub Actions  
- **Hosting:** AWS EC2  

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/AlfinAkash/autodeploy-ec2-docker.git
cd autodeploy-ec2-docker