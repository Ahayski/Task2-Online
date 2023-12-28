import { Request, Response } from "express";
import ArticleServices from "../services/ArticleServices";

export default new class ArticleControllers {
    async find(req: Request, res: Response) {
        try {
            const response = await ArticleServices.find()

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}