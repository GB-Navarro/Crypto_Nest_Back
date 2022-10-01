import { news } from "@prisma/client";

import newsRepository from "../../repositories/news/newsRepository";

async function checkTittleExistence(tittle: string) {

    const tittleExist: news = await newsRepository.getByTittle(tittle);

    if (tittleExist) {
        throw ({ type: "tittleAlreadyExist", message: "This tittle already exist!" });
    }
}

const newsServices = {

}

export default newsServices;