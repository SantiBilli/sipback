import multer from "multer";
import fs from "fs";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      if (!fs.existsSync('uploads/')) {
        fs.mkdirSync('uploads/', { recursive: true });
      }

      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "_" + file.originalname
      req.customFile = uniqueSuffix
      cb(null, uniqueSuffix)
    }
  })
  
export const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {

      if (!fs.existsSync('soporte/')) {
        fs.mkdirSync('soporte/', { recursive: true });
      }

      cb(null, 'soporte/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "_" + file.originalname
      req.customFile = uniqueSuffix
      cb(null, uniqueSuffix)
    }
  })

  export const storage3 = multer.diskStorage({
    destination: function (req, file, cb) {

      if (!fs.existsSync('uploadsPFP/')) {
        fs.mkdirSync('uploadsPFP/', { recursive: true });
      }

      cb(null, 'uploadsPFP/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "_" + file.originalname
      req.customFile = uniqueSuffix
      cb(null, uniqueSuffix)
    }
  })
  
  
  

export const upload = multer({ storage: storage })
export const upload2 = multer({ storage: storage2 })
export const upload3 = multer({ storage: storage3 })
