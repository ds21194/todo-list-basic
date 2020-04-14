import cors from "cors";
import {
    createNewUser,
    getUsers,
    getUserByID,
    editUserById,
    deleteUserById
} from '../controllers/User';

const routes = (app) => {
    app.route('/user')
        .get((req, res, next) => {
            console.log(`requested ${req.params}`);
            console.log(req.params);
            next();
        }, getUsers)

        .post(createNewUser);

    app.route('/user/:userID')
        .get((req, res, next) => {

            next();
        }, getUserByID)

        .put((req, res, next)=>{
            next();
        }, editUserById)

        .delete((req, res, next)=>{
            next();
        }, deleteUserById);
};

export default routes

