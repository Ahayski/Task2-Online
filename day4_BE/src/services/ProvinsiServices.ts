import { Repository } from "typeorm"
import { Provinsi } from "../entity/Provinsi"
import { AppDataSource } from "../data-source"

export default new class ProvinsiServices {
    private readonly ProvinsiRepository: Repository<Provinsi> = AppDataSource.getRepository(Provinsi)
    async create(data: any): Promise<object | string> {
        try {
            const response = await this.ProvinsiRepository.save(data)

            return {
                message: "success creating a new Provinsi",
                data: response
            }
        } catch (error) {
            return "message: something error while creating Provinsi"
        }
    }
    async update(id: number, data: any): Promise<object | string> {
        try {
            const response = await this.ProvinsiRepository.update(id, data);
            return {
                message: "success updating a Provinsi",
                data: response
            };
        } catch (error) {
            console.error('Error updating Provinsi:', error);
            return {
                message: "something error while updating Provinsi",
                error: error.message
            };
        }
    }


    async delete(id: number): Promise<object | string> {
        try {
            const response = await this.ProvinsiRepository.delete(id);
            return {
                message: "success deleting a Provinsi",
                data: response
            }
        } catch (error) {
            return "message: something error while deleting Provinsi"
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.ProvinsiRepository.find()
            return {
                message: "success get all Provinsi",
                data: response
            }
        } catch (error) {
            return "message: something error while get all Provinsi"
        }
    }
}


