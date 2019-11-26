const express = require("express");
const connectDB = require("./config/db");

//Initialise express
const app = express();

//Connect Databse
connectDB();

//Initialise Middleware
app.use(express.json({ extended: false }));

//Test request
app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

//Use enviroment PORT on deployment or 5000 on local
const PORT = process.env.PORT || 5000;

//Listen on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
