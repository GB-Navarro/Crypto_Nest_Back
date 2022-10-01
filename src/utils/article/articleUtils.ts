import { articles, userArticles } from "@prisma/client";

function generateArticleData(tittle: string, text: string, categoryId: number): Omit<articles, "id" | "date"> {

    const article: Omit<articles, "id" | "date"> = {
        tittle: tittle,
        text: text,
        categoryId: categoryId
    }

    return article;
}

function generateRelationshipData(userId: number, articleId: number): Omit<userArticles, "id"> {

    const relationshipData: Omit<userArticles, "id"> = {
        userId: userId,
        articleId: articleId
    }

    return relationshipData;
}

const articleUtils = {
    generateArticleData,
    generateRelationshipData
}

export default articleUtils;