import * as express from 'express'
import ArticleController from '../controller/ArticleController'
import VoterController from '../controller/VoterController'
import PartaiController from '../controller/PartaiController'
import PaslonController from '../controller/PaslonController'
import UploadFile from '../middlewares/UploadFile'

const router = express.Router()

router.get('/articles', ArticleController.find)
router.post('/article', UploadFile.upload("gambar"), ArticleController.create)

router.get('/paslons', PaslonController.find)
router.post('/paslon', UploadFile.upload("paslonImg"), PaslonController.create)

router.get('/partais', PartaiController.find)
router.post('/partai', UploadFile.upload("partaiImg"), PartaiController.create)

router.get('/voters', VoterController.find)
router.post('/voter', VoterController.create)

export default router