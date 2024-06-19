import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
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
