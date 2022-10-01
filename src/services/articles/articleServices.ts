import { articles, articlesCategory, userArticles } from "@prisma/client";
import { userInfoInterface } from "../../interfaces/userInterfaces/userInterfaces";
import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";

import articleUtils from "../../utils/article/articleUtils";
import articleRepository from "../../repositories/articles/articleRepository";

async function checkTittleExistence(tittle: string) {

    const tittleExist: articles = await articleRepository.getByTittle(tittle);

    if (tittleExist) {
        throw ({ type: "tittleAlreadyExist", message: "This tittle already exist!" });
    }
}
async function getCategoryIdByName(categoryName: string) {

    const categoryId = await articleRepository.getCategoryIdByName(categoryName);

    if (categoryId === null) {
        throw ({ type: "categoryDoNotExist", message: "This category do not exist!" });
    }

    return categoryId;
}

async function create(data: createTextInterface, userInfo: userInfoInterface) {

    const { tittle, text, category: categoryName }: { tittle: string, text: string, category: string } = data;
    const { userId }: { userId: number } = userInfo;

    await checkTittleExistence(tittle);

    const { id: categoryId }: Partial<articlesCategory> = await getCategoryIdByName(categoryName);

    const article: Omit<articles, "id" | "date"> = articleUtils.generateArticleData(tittle, text, categoryId);

    const { id: articleId }: Partial<articles> = await articleRepository.createAndReturn(article);

    const relationshipData: Omit<userArticles, "id"> = articleUtils.generateRelationshipData(userId, articleId);

    await articleRepository.createRelationship(relationshipData);
}

const articleServices = {
    create
}

export default articleServices;