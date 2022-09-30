import articleRepository from "../../repositories/articles/articleRepository";

async function getCategoryIdByName(categoryName: string) {

    const categoryId = await articleRepository.getCategoryIdByName(categoryName);

    if(categoryId === null){
        throw ({ type: "categoryDoNotExist", message: "This category do not exist!" });
    }

    return categoryId;
}

const articleServices = {
    getCategoryIdByName
}

export default articleServices;