import * as Joi from "joi"

export const createVoterSchema = Joi.object({
    namaVoter: Joi.string().max(255).required(),
    alamat: Joi.string().max(255).required(),
    jenKel: Joi.string().max(255).required(),
    paslon: Joi.string().max(255).required()
})