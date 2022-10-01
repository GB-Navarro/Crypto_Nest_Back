import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";

import Joi from "joi";

const create = Joi.object<createTextInterface>({
    tittle: Joi.string().min(5).required(),
    text: Joi.string().min(100).required(),
    category: Joi.string().min(4).required()
})

const textSchemas = {
    create
}

export default textSchemas;

