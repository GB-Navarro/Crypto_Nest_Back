import exampleRepository from "../../repositories/example/exampleRepository";

async function example() {

    exampleRepository.example();

    console.log("[V] The exampleServices is working fine!")
}

const exampleServices = {
    example
}

export default exampleServices;