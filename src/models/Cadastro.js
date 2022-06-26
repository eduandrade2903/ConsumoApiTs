import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema(
    {
    id: {type: String},
    name: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'tasks', required: true},
    cpf: {type: String, required: true},
    birthDate: {type: Date, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    anddress: {type: String, required: true},
    number: {type: String, required: true},
    complement: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    zipCode: {type: String, required: true}
    }
);

const cadastros = mongoose.model('cadastros', cadastroSchema);

export default cadastros;
