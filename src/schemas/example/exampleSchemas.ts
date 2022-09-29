import Joi from "joi";

const example = Joi.object({
    example: Joi.string().required()
})

const exampleSchemas = {
    example
}