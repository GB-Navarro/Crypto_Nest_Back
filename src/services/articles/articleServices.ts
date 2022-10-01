import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";
import { userInfoInterface } from "../../interfaces/userInterfaces/userInterfaces";
import { articles } from "@prisma/client";

import articleRepository from "../../repositories/articles/articleRepository";

async function create(data: createTextInterface, userInfo: userInfoInterface) {

    const { tittle, text, category: categoryName }: { tittle: string, text: string, category: string } = data;
    const { userId }: { userId: number } = userInfo;

    await checkTittleExistence(tittle);

    const { id: categoryId } = await getCategoryIdByName(categoryName);

    delete data.category

    const article: Omit<articles, "id" | "date"> = {
        tittle: tittle,
        text: text,
        categoryId: categoryId
    }

    await articleRepository.create(article);
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

const articleServices = {
    create
}

export default articleServices;