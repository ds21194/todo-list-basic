import mongoose from 'mongoose'
import TodoScheme from "./Todos";

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todos: {
        type: [TodoScheme],
        default: [],
        required: false
    }
});


export default UserSchema

