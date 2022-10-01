import { news, newsCategory } from "@prisma/client";

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

const newsServices = {

}

export default newsServices;