import { Request, Response } from "express";
import VoterServices from "../services/VoterServices";
import { createVoterSchema } from "../utils/validator/VoterValidator";

export default new class VoterControllers {
    async find(req: Request, res: Response) {
        try {
            const data = await VoterServices.find()

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
            console.log(req.body);

            const data = {
                namaVoter: req.body.namaVoter,
                alamat: req.body.alamat,
                jenKel: req.body.jenKel,
                paslon: req.body.paslon
            }
            console.log("Data:", data);
            const { error, value } = createVoterSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)


            const response = await VoterServices.create(value)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}