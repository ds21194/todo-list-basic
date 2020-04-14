import mongoose from 'mongoose';
import UserSchema from "../models/User";

const User = mongoose.model('User', UserSchema);

export const createNewUser = (req, res) =>{
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if(err){
            return res.send(err);
        }
        res.json(user);
    });
};

export const getUsers = (req, res) =>{
    User.find({}, (err, user)=>{
        if(err){
            return res.send(err);
        }
        res.json(user);
    })
};

export const getUserByID = (req, res) => {
    User.findById(req.params.userID, (err, user)=>{
        if(err){
            return res.send(err);
        }
        res.json(user);
    })
};

export const editUserById = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userID},
        req.body,
        { returnOriginal: false },
        (err, user) =>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        res.json(user);
    });
};

export const deleteUserById = (req, res) =>{
    User.findOneAndDelete( {_id: req.params.userID}, (err, user)=>{
        if(err){
            console.log("Error in deleting User: " + err);
            return res.send(err);
        }
        res.json(user);
    });
};
