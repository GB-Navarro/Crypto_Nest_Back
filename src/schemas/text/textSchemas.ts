import { textInterface } from "../../interfaces/textInterfaces/textInterfaces";

import Joi from "joi";

const createText = Joi.object<textInterface>({
    type: Joi.string().required().allow(["news", "educational"]),
    tittle: Joi.string().min(5).required(),
    text: Joi.string().min(100).required(),
    category: Joi.string().min(4).required()
})