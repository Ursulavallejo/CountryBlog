#### May 2024

> The development team behind 🌍 COUNTRY BLOG:
> Malin Johansson, Vigan Kumnova, Maja Lennevi and Ursula Vallejo.

**Project Summary**

Country Blog is a full-stack application developed as part of the Backend Programming (LABB 3) course at IT-Högskolan. The goal of the project was to create an interactive blog where users can explore countries and cities, view detailed travel information, and read or submit comments based on their experiences.

The backend is built with MySQL and MongoDB (via Mongoose) to manage structured data (countries, cities, languages, currencies) and user-generated content (comments). The frontend, built with Vue.js, allows users to:

🔎 Browse cities and filter by country

💬 Read and post comments

🌐 View extended data such as language, currency, population, attractions, and flags

🎯 Fetch dynamic data via RESTful API endpoints (GET by ID, full joins, etc.)

The project includes structured endpoints, reusable components, and a responsive UI based on custom wireframes created in Figma.

Main features implemented:

- Country-city relationship with JOINs (SQL)
- City-specific views fetched by ID
- Comment system stored in MongoDB
- Flags dynamically matched to countries
- Suggestions for scalability and admin features

✨ Developed collaboratively in a team, with individual contributions clearly defined.


https://github.com/user-attachments/assets/202d7634-e3b2-45ca-9b85-d01e05f9be21


---

### General view:

[<img src="documentation/Home.png" width="550"/>](WireframeHome)
[<img src="documentation/all_comments.png" width="550"/>](WireframeAllComments)
[<img src="documentation/One_Country_comments.png" width="550"/>](WireframeOne_Country_comments)

---

¡Claro que sí! Aquí tienes una sección que puedes pegar en tu `README.md` como guía para iniciar el proyecto localmente, adaptada para tu stack:

---

## 🚀 How to Run the Project Locally

### 🛠️ Requirements

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* [MySQL](https://www.mysql.com/)
* [MongoDB](https://www.mongodb.com/) (local or Atlas)
* [Vue CLI](https://cli.vuejs.org/) (if using `vue ui` or global commands)

---

### 📦 Backend Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/Ursulavallejo/CountryBlog.git
   cd CountryBlog
   ```

2. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Configure MySQL connection**

   * Create a `.env` file inside `/backend` (if needed) and add your MySQL credentials:

     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=travel_blog
     ```
   * Run SQL setup script (if available) to create and seed your database.

4. **Run MongoDB** (make sure it’s running on localhost:27017 or update config).

5. **Start backend server**

   ```bash
   npm run dev
   ```

---

### 💻 Frontend Setup

1. Open a new terminal window:

   ```bash
   cd frontend
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Navigate to:

   ```
   http://localhost:5173
   ```

---

### 🌐 Available Endpoints

* `GET /api/country-city-info`
* `GET /api/country-city-info/:id`
* `GET /api/comment`
* `GET /api/countries`
* `POST /api/comment` (if implemented)

---

¿Quieres que adapte esto si usas Docker o PM2, o necesitas que te ayude a recordar si el backend usaba `nodemon` o algo más?


---

### 📄 [Detailed Information of the Project](Detail_Info.md)
