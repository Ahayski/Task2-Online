import * as express from 'express'
import ArticleController from '../controller/ArticleController'

const router = express.Router()

router.get('/article', ArticleController.find)

export default router