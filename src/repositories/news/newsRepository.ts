import { news, userNews } from "@prisma/client";

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

async function createAndReturn(data: Omit<news, "id" | "date">) {

    const result = await prisma.news.create({
        data: data
    })

    return result
}

async function createRelationship(data: Omit<userNews, "id">) {

    await prisma.userNews.create({
        data: data
    })
}

const newsRepository = {
    getByTittle,
    getCategoryIdByName,
    createAndReturn,
    createRelationship
}

export default newsRepository;
