import {Request} from 'express'

import * as multer from 'multer'
import * as path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req: Request, file, cb) => {
           const ext = path.extname(file.originalname);
           const name = path.basename(file.originalname, ext)

           cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}