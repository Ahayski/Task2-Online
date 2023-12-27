import { Request, Response } from 'express';
import ProvinsiServices from '../services/ProvinsiServices';

export default new class ProvinsiController {
    async create(req: Request, res: Response) {
        try {
            const data = req.body;
            const response = await ProvinsiServices.create(data);
            return res.status(201).json(response);
        } catch (error) {
            console.error('Error creating province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
                return res.status(400).json({ message: "Invalid ID provided", error: "Invalid input for type number" });
            }
            const data = req.body;
            const response = await ProvinsiServices.update(id, data);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error updating province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
                return res.status(400).json({ message: "Invalid ID provided", error: "Invalid input for type number" });
            }

            const response = await ProvinsiServices.delete(id);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error deleting province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await ProvinsiServices.getAll();
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error getting all provinces:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
};
