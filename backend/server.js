const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const movieRoutes = require("./routes/movies");
app.use("/api/movies", movieRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(3000, () =>
      console.log(
        "\x1b[36m%s\x1b[0m",
        "➡️ Server running at: http://localhost:3000"
      )
    )
  )
  .catch((err) => console.log(err));
