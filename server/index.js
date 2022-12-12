const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const app = express();
const {registerUser} = require("./controllers/userController");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database
connectDB();

// routes
app.use("/api/user", require("./routes/UserRoute"));

app.listen(5000, () => {
  console.log("Server running on PORT 5000...");
});
