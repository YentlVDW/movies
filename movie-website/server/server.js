const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

const movies = require("./routes/movies");

mongoose
  .connect("mongodb://127.0.0.1:27017/moviesdb", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Verbonden met Mongodb.");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const app = express();

const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });
app.use("/movies", movies);

app.get("/", (req, res) => {
  res.send("Gebruik de API routes.");
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

app.listen(port, () => {
  console.log(`Server luistert op poort ${port}`);
});
