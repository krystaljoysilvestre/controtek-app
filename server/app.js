require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

app.use(
  cors({
    origin: "https://controtek-app.vercel.app",
  })
);
app.use(express.json());

const db = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

app.post("/save-contact", (req, res) => {
  const { name, email, contactNo, message } = req.body;

  // Use placeholders in the query
  const query =
    "INSERT INTO contact (name, email, contactNo, message) VALUES (?, ?, ?, ?)";

  // Use execute() with placeholders and the values as an array
  db.execute(query, [name, email, contactNo, message], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Error inserting data" });
    }
    res.status(200).json({ message: "Data saved successfully", data: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
