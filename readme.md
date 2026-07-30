# Natours

A modern, full-stack tour booking platform built with **Node.js**, **Express.js**, **MongoDB**, and **Pug**. The application provides a complete booking experience with secure authentication, tour management, payment integration, and a responsive user interface.

The project was developed to strengthen my understanding of backend architecture, RESTful APIs, authentication, database design, and production-ready web application development.

---

## Features

### User Features
- Secure user authentication and authorization
- JWT-based login and protected routes
- Password reset via email
- User profile management
- Update personal information and password
- Browse available tours
- Interactive tour pages
- Tour reviews and ratings
- Online tour booking
- Responsive UI across devices

### Admin Features
- Manage tours (Create, Read, Update, Delete)
- Manage users
- Manage reviews
- Role-based access control
- Dashboard for application management

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- Pug Template Engine
- HTML5
- CSS3
- JavaScript (ES6)

### Authentication & Security
- JWT Authentication
- bcrypt Password Hashing
- Cookie Authentication
- Helmet
- Express Rate Limiter
- Data Sanitization
- XSS Protection

### Other Tools
- Stripe Payments
- Nodemailer
- Multer
- Sharp
- Mapbox
- Postman
- Git & GitHub

---

## Project Structure

```
Natours/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── public/
├── views/
├── dev-data/
├── app.js
├── server.js
└── package.json
```

---

## Key Concepts Implemented

- MVC Architecture
- RESTful API Design
- Authentication & Authorization
- Role-Based Access Control
- CRUD Operations
- Error Handling
- Async Programming
- Middleware
- MongoDB Aggregation
- File Uploads
- Image Processing
- Payment Gateway Integration
- Email Services
- Security Best Practices

---

## Installation

Clone the repository

```bash
git clone https://github.com/aryanshandilya19/natours.git
```

Navigate to the project

```bash
cd natours
```

Install dependencies

```bash
npm install
```

Create a `.env` file and configure the required environment variables.

Start the development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file and configure variables such as:

```env
NODE_ENV=
PORT=
DATABASE=
DATABASE_PASSWORD=
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=
STRIPE_SECRET_KEY=
MAPBOX_TOKEN=
```

---

## Learning Outcomes

This project helped me gain practical experience in:

- Building scalable backend applications
- Designing REST APIs
- Database modeling with MongoDB
- Authentication & Authorization
- Secure application development
- Deployment-ready project structure
- Payment integration
- Backend performance optimization

---

## Future Improvements

- Docker support
- CI/CD pipeline
- Unit & Integration Testing
- Redis caching
- Real-time notifications
- Admin analytics dashboard
- API documentation using Swagger

---

## Author

**Aryan Shandilya**

GitHub: https://github.com/aryanshandilya19

---

## License

This project is intended for educational and portfolio purposes.