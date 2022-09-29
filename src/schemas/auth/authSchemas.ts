import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import Joi from "joi";

const signUp = Joi.object<signUpInterface>({
    name: Joi.string().min(4).max(15).required(),
    email: Joi.string().email({ tlds: { allow: false } }).min(7).max(20).required(),
    password: Joi.string().min(8).max(10).required(),
    confirmedPassword: Joi.string().min(8).max(10).required()
})

const authSchemas = {
    signUp
}

export default authSchemas;