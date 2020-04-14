import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoScheme = new Schema({
   todoName: {
       type:      String,
       required:  true
   },
    completed: {
        type:     Boolean,
        default:  false
    }
});

export default TodoScheme
