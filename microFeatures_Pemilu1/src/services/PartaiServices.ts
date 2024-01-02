import { Repository } from "typeorm";
import { Partai } from "../entity/Partai";
import { AppDataSource } from "../data-source";

export default new class PartaiService {
    private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)
    async find(): Promise<object> {
        try {
            const partais = await this.PartaiRepository
                .createQueryBuilder("partais")
                .getMany()

            return partais

        } catch (error) {
            throw error
        }
    }

    async create(reqBody: any): Promise<object> {
        try {
            const partai = new Partai();

            // Setiap properti pada reqBody akan di-set ke dalam objek partai
            Object.keys(reqBody).forEach((key) => {
                if (key === "visiMisi") {
                    // Jika properti merupakan array string, split berdasarkan newline
                    partai[key] = reqBody[key].split(",");
                } else {
                    partai[key] = reqBody[key];
                }
            });

            await this.PartaiRepository.save(partai);

            return {
                message: "success",
                data: partai,
            };
        } catch (error) {
            throw error;
        }
    }
}



