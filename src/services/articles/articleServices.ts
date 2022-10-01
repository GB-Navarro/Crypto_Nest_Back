import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";
import { userInfoInterface } from "../../interfaces/userInterfaces/userInterfaces";
import { articles, userArticles } from "@prisma/client";

import articleRepository from "../../repositories/articles/articleRepository";

async function create(data: createTextInterface, userInfo: userInfoInterface) {

    const { tittle, text, category: categoryName }: { tittle: string, text: string, category: string } = data;
    const { userId }: { userId: number } = userInfo;

    await checkTittleExistence(tittle);

    const { id: categoryId } = await getCategoryIdByName(categoryName);

    const article: Omit<articles, "id" | "date"> = generateData(tittle, text, categoryId);

    const { id: articleId } = await articleRepository.createAndReturn(article);

    const relationshipData: Omit<userArticles, "id"> = {
        userId: userId,
        articleId: articleId
    }

    await articleRepository.createRelationship(relationshipData);

}

async function getCategoryIdByName(categoryName: string) {

    const categoryId = await articleRepository.getCategoryIdByName(categoryName);

    if (categoryId === null) {
        throw ({ type: "categoryDoNotExist", message: "This category do not exist!" });
    }

    return categoryId;
}

async function checkTittleExistence(tittle: string) {

    const tittleExist: articles = await articleRepository.getByTittle(tittle);

    if (tittleExist) {
        throw ({ type: "tittleAlreadyExist", message: "This tittle already exist!" });
    }
}

function generateData(tittle: string, text: string, categoryId: number): Omit<articles, "id" | "date"> {

    const article: Omit<articles, "id" | "date"> = {
        tittle: tittle,
        text: text,
        categoryId: categoryId
    }

    return article;
}

const articleServices = {
    create
}

export default articleServices;