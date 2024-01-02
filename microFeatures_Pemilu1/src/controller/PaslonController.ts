import { Request, Response, response } from "express";
import PaslonServices from "../services/PaslonServices";
import { createPaslonSchema } from "../utils/validator/PaslonValidator";
import cloudinary from "../libs/cloudinary";

export default new class PaslonControllers {
    async find(req: Request, res: Response) {
        try {
            const data = await PaslonServices.find()

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
                nama: req.body.nama,
                paslonImg: res.locals.filename,
                noUrut: req.body.noUrut,
                visiMisi: req.body.visiMisi,
                koalisi: req.body.koalisi
            }
            const { error, value } = createPaslonSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)


            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.paslonImg)

            const obj = {
                nama: value.nama,
                paslonImg: cloudinaryRes.secure_url,
                noUrut: value.noUrut,
                visiMisi: value.visiMisi,
                koalisi: value.koalisi
            }
            const response = await PaslonServices.create(obj)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}