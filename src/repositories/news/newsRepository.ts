import { news } from "@prisma/client";

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

const newsRepository = {
    getByTittle,
    getCategoryIdByName
}

export default newsRepository;
