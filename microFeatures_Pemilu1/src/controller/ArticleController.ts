import { Request, Response, response } from "express";
import ArticleServices from "../services/ArticleServices";
import { createArticleSchema } from "../utils/validator/ArticleValidator";
import cloudinary from "../libs/cloudinary";

export default new class ArticleControllers {
    async find(req: Request, res: Response) {
        try {
            const data = await ArticleServices.find()

            let response = {
                message: "Succes",
                data
            }
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = {
                gambar: res.locals.filename,
                articleDate: req.body.articleDate,
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            }
            const { error, value } = createArticleSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)


            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.gambar)

            const obj = {
                gambar: cloudinaryRes.secure_url,
                articleDate: value.articleDate,
                title: value.title,
                description: value.description,
                author: value.author
            }
            const response = await ArticleServices.create(obj)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}