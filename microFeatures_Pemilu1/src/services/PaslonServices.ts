import { Repository } from "typeorm";
import { Paslon } from "../entity/Paslon";
import { AppDataSource } from "../data-source";

export default new class PaslonService {
    private readonly PaslonRepository: Repository<Paslon> = AppDataSource.getRepository(Paslon)
    async find(): Promise<object> {
        try {
            const paslons = await this.PaslonRepository
                .createQueryBuilder("paslons")
                .getMany()

            return paslons

        } catch (error) {
            throw error
        }
    }

    async create(reqBody: any): Promise<object> {
        try {
            const paslon = new Paslon();

            // Setiap properti pada reqBody akan di-set ke dalam objek Paslon
            Object.keys(reqBody).forEach((key) => {
                if (key === "visiMisi" || key === "koalisi") {
                    // Jika properti merupakan array string, split berdasarkan newline
                    paslon[key] = reqBody[key].split(",");
                } else {
                    paslon[key] = reqBody[key];
                }
            });

            await this.PaslonRepository.save(paslon);

            return {
                message: "success",
                data: paslon,
            };
        } catch (error) {
            throw error;
        }
    }
}



