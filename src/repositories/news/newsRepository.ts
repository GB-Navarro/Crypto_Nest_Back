import prisma from "../../database/prisma";

async function getByTittle(tittle: string) {
    return await prisma.news.findFirst({
        where: {
            tittle: tittle
        }
    })
}

const newsRepository = {
    getByTittle
}

export default newsRepository;
