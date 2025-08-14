require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;

const movieRoutes = require("./routes/movieRoutes");

app.use("/api", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
