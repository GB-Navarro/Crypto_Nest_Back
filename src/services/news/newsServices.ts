import { news, newsCategory, userNews } from "@prisma/client";
import { userInfoInterface } from "../../interfaces/userInterfaces/userInterfaces";
import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";

import newsUtils from "../../utils/news/newsUtils";
import newsRepository from "../../repositories/news/newsRepository";

async function checkTittleExistence(tittle: string) {

    const tittleExist: news = await newsRepository.getByTittle(tittle);

    if (tittleExist) {
        throw ({ type: "tittleAlreadyExist", message: "This tittle already exist!" });
    }
}

async function getCategoryIdByName(categoryName: string) {

    const categoryId: Partial<newsCategory> = await newsRepository.getCategoryIdByName(categoryName);

    if (categoryId === null) {
        throw ({ type: "categoryDoNotExist", message: "This category do not exist!" });
    }

    return categoryId;
}

async function create(data: createTextInterface, userInfo: userInfoInterface) {

    const { tittle, text, category: categoryName }: { tittle: string, text: string, category: string } = data;
    const { userId }: { userId: number } = userInfo;

    await checkTittleExistence(tittle);

    const { id: categoryId }: Partial<newsCategory> = await getCategoryIdByName(categoryName);

    const news: Omit<news, "id" | "date"> = newsUtils.generateNewsData(tittle, text, categoryId);

    const { id: newsId }: Partial<news> = await newsRepository.createAndReturn(news);

    const relationshipData: Omit<userNews, "id"> = newsUtils.generateRelationshipData(userId, newsId);

    await newsRepository.createRelationship(relationshipData);
}

const newsServices = {
    create
}

export default newsServices;