import { news, userNews } from "@prisma/client";

function generateNewsData(tittle: string, text: string, categoryId: number): Omit<news, "id" | "date"> {

    const news: Omit<news, "id" | "date"> = {
        tittle: tittle,
        text: text,
        categoryId: categoryId
    }

    return news;
}

function generateRelationshipData(userId: number, newsId: number): Omit<userNews, "id"> {

    const relationshipData: Omit<userNews, "id"> = {
        userId: userId,
        newsId: newsId
    }

    return relationshipData;
}

const newsUtils = {
    generateNewsData,
    generateRelationshipData
}

export default newsUtils;