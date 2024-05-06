import multer from "multer";

// export const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + "_" + file.originalname
//       // req.customFile = uniqueSuffix
//       cb(null, uniqueSuffix)
//     }
//   })
  
const storage = multer.memoryStorage()

export const upload = multer({ storage: storage })
