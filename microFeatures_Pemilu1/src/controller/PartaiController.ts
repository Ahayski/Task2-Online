import { Request, Response, response } from "express";
import PartaiServices from "../services/PartaiServices";
import { createPartaiSchema } from "../utils/validator/PartaiValidator";
import cloudinary from "../libs/cloudinary";

export default new class PartaiControllers {
    async find(req: Request, res: Response) {
        try {
            const data = await PartaiServices.find()

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
                noUrut: req.body.noUrut,
                partaiImg: res.locals.filename,
                nama: req.body.nama,
                ketuaUmum: req.body.ketuaUmum,
                visiMisi: req.body.visiMisi,
                alamat: req.body.alamat
            }
            const { error, value } = createPartaiSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)


            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.partaiImg)

            const obj = {
                noUrut: value.noUrut,
                partaiImg: cloudinaryRes.secure_url,
                nama: value.nama,
                ketuaUmum: value.ketuaUmum,
                visiMisi: value.visiMisi,
                alamat: value.alamat
            }
            const response = await PartaiServices.create(obj)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}