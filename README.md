# ByteUs - EduBridge  
### A Simple Digital Learning & Progress Tracking Web Application

---

## Problem Statement
In Sri Lanka, many schools and educational institutions—especially in rural and under-resourced areas—face challenges such as limited access to digital learning platforms and difficulty in tracking student progress. These challenges contribute to inequalities in access to quality education.

---

##  Solution Overview
**EduBridge** is a lightweight web-based learning support system designed to help educators and students in institutions with limited resources.

The system allows:
- Teachers to upload learning materials
- Students to access lessons and track completion
- Educators to monitor student learning progress

The application focuses on simplicity, accessibility, and ease of use.

---

##  Sustainable Development Goals (SDGs)
This project aligns with the following UN Sustainable Development Goals:

- **SDG 4 – Quality Education**  
  Promotes inclusive and equitable quality education through digital learning support.

- **SDG 10 – Reduced Inequalities**  
  Helps reduce educational inequality by improving access to learning resources.

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB (MongoDB Atlas)

### Deployment
- Azure App Service (Backend)
- Azure Static Web Apps (Frontend)

---

##  User Roles

### Teacher
- Login to the system
- Add learning materials
- View student progress

### Student
- Register and login
- View available learning materials
- Mark lessons as completed

> **Note:** An admin panel is not included in this version to keep the system simple and beginner-friendly.

---

##  Key Features
- Role-based authentication (Teacher / Student)
- Lesson creation and viewing
- Student progress tracking
- Clean and user-friendly interface


## Database Structure

### Users
- name
- email
- password
- role (teacher / student)

### Lessons
- title
- description
- createdBy (teacherId)

### Progress
- studentId
- lessonId
- status (completed / pending)
