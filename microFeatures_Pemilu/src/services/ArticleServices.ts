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
                    date: articles.articleDate,
                    title: articles.title,
                    author: articles.author
                }
            })

            return {
                message: "success",
                data: contentArticles
            }
        } catch (error) {
            throw error
        }
    }
}