const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error("Only images (jpeg, jpg, png, gif) are allowed"));
    }
  },
});

module.exports = upload;
