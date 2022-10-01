import { news } from "@prisma/client";

function generateNewsData(tittle: string, text: string, categoryId: number): Omit<news, "id" | "date"> {

    const news: Omit<news, "id" | "date"> = {
        tittle: tittle,
        text: text,
        categoryId: categoryId
    }

    return news;
}

const newsUtils = {
    generateNewsData
}

export default newsUtils;