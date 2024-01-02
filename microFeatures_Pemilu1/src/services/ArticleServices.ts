import { Repository } from "typeorm";
import { Article } from "../entity/Article";
import { AppDataSource } from "../data-source";

export default new class ArticleService {
    private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article)
    async find(): Promise<object> {
        try {
            const articles = await this.ArticleRepository
                .createQueryBuilder("articles")
                .getMany()

            const contentArticles = articles.map(articles => {
                return {
                    id: articles.id,
                    gambar: articles.gambar,
                    articleDate: articles.articleDate,
                    title: articles.title,
                    author: articles.author
                }
            })

            return contentArticles

        } catch (error) {
            throw error
        }
    }

    async create(reqBody: object): Promise<object> {
        try {
            console.log(reqBody)
            const article = await this.ArticleRepository.save(reqBody)

            return {
                message: "success",
                data: article
            }
        } catch (error) {

        }
    }



}