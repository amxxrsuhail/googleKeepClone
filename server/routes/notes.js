const router = require("express").Router();
let Note = require("../models/note.model");

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/").post((req, res) => {
  // console.log(req.body);
  const title = req.body.title;
  const content = req.body.content;

  const newNote = new Note({ title, content });

  newNote
    .save()
    .then(() => res.json("note added"))
    .catch((err) => res.status(400).json(`error: ${err}`));
});

router.route("/:id").delete((req, res) => {
//   console.log(req.params.id);
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("note deleted"))
    .catch((err) => res.status(400).json(`error: ${err}`));
});

module.exports = router;
