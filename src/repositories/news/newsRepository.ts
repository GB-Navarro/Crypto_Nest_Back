import prisma from "../../database/prisma";

async function getByTittle(tittle: string) {
    return await prisma.news.findFirst({
        where: {
            tittle: tittle
        }
    })
}

async function getCategoryIdByName(name: string) {
    return await prisma.newsCategory.findFirst({
        where: {
            name: name
        },
        select: {
            id: true
        }
    })
}

const newsRepository = {
    getByTittle,
    getCategoryIdByName
}

export default newsRepository;
