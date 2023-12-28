const express = require("express");
const Movie = require("../models/movie");

const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find();
  return res.send(movies);
});

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const nieuweMovie = new Movie(data);
    const toegevoegdeMovie = await Movie.create(nieuweMovie);

    return res.send(toegevoegdeMovie);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const resultaat = await Movie.deleteOne({
      _id,
    });

    if (!resultaat.deletedCount) {
      return res.send(`Movie met id ${_id} werd niet gevonden!`);
    }

    return res.send(`Movie met id ${_id} succesvol verwijderd!`);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.put("/:id", async (req, res) => {
  const data = req.body;
  try {
    const gewijzigdeMovie = await Movie.findByIdAndUpdate(req.params.id, data, {
      runValidators: true,
      new: true,
    });
    if (!gewijzigdeMovie) {
      return res
        .status(404)
        .send(`Movie met id ${req.params.id} werd niet gevonden.`);
    }
    return res.send(gewijzigdeMovie);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
