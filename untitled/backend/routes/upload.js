const express = require("express");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/assets/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

exports.imagePath = router.post("/upload", upload.single("upload"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
  return(file.path)
});

module.exports = router;
