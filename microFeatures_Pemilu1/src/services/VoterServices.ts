import { Repository } from "typeorm";
import { Voter } from "../entity/Voter";
import { AppDataSource } from "../data-source";

export default new class VoterService {
    private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)
    async find(): Promise<object> {
        try {
            const voters = await this.VoterRepository
                .createQueryBuilder("voters")
                .getMany()

            return voters

        } catch (error) {
            throw error
        }
    }

    async create(reqBody: any): Promise<object> {
        try {
            const voter = await this.VoterRepository.save(reqBody);

            return {
                message: "success",
                data: voter,
            };
        } catch (error) {
            throw error;
        }
    }
}



