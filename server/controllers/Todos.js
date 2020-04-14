import UserSchema from "../models/User";
import mongoose from "mongoose";
import TodoScheme from "../models/Todos";

const Todo = mongoose.model(TodoScheme);

export const addNewTodo = (req, res) => {
    // let newTodo = new Todo()
};
