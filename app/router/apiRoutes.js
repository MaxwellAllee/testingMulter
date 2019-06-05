
const router = require("express").Router();
// const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const gfs = require('../../server')
const storage= require('../models/phot')
const upload= multer({ storage });
module.exports = function(app) {
  app.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        res.render('index', { files: false });
      } else {
        files.map(file => {
          if (
            file.contentType === 'image/jpeg' ||
            file.contentType === 'image/png'
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
        });
        res.render('index', { files: files });
      }
    });
  });
// If no API routes are hit, send the React app
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({ file: req.file });
  res.redirect('/');
});
}
