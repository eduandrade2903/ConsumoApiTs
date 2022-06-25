import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema(
    {
    id: {type: String},
    name: {type: String},
    cpf: {type: String},
    birthDate: {type: Date},
    email: {type: String},
    password: {type: String},
    anddress: {type: String},
    number: {type: String},
    complement: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    zipCode: {type: String}
    }
);

const cadastros = mongoose.model('cadastros', cadastroSchema);

export default cadastros;
