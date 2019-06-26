const path = require('path');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const connectionInfo = require('../../server')
const conn = connectionInfo.conn
const mongoURI = connectionInfo.mong
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  module.exports = storage