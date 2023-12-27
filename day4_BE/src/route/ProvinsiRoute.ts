import * as express from 'express'
import ProvinsiController from '../controller/ProvinsiController'

const router = express.Router()

router.post('/provinsi', ProvinsiController.create)
router.put('/provinsi/:id', ProvinsiController.update)
router.delete('/provinsi/:id', ProvinsiController.delete)
router.get('/provinsi', ProvinsiController.getAll)

export default router