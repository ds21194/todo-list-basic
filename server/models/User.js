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
    todos: {
        type: [TodoScheme]
    }
});

// const User = mongoose.model('User', {
//
// });

export default UserSchema

