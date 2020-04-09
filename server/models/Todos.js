import mongoose from 'mongoose';
import {bool} from "prop-types";

const Schema = mongoose.Schema;

const TodoScheme = new Schema({
   todoName: {
       type: String,
       required: true
   },
    completed: {
        type: bool,
        required: false,
        default: false
    }
});

export default TodoScheme
