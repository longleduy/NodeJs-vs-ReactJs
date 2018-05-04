import bcrypt from 'bcrypt';
import session from 'express-session';
import user from '../models/user_infors';
import * as hash from '../config/hash';
import * as validate_message from '../constants/valid_message';
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../constants/secret_key';

exports.sign_up = async (req, res) => {
    let a = await hash.hash_pass_async(req.body.pass_word);
    let _new_user = new user({
        user_name: req.body.user_name,
        pass_word: a,
        email: req.body.email
    });
    _new_user.save((err, data) => {
        if (err) {
            throw err;
            res.json({
                status: false
            })
        }
        else {
            res.json({
                status: true
            })
        }
    })
}
exports.check_email = (req, res) => {
    user.find({ email: req.body.email }, (err, data) => {
        if (err) throw err;
        if (data.length > 0) {
            res.json({
                status: false,
                message: validate_message.EMAIL_EXISTS
            })
        }
        else {
            res.json({
                status: true,
                message: validate_message.EMAIL_INVALID
            })
        }
    })
}
exports.sign_in = async (req, res) => {
    try {
        let data = await user.find({ email: req.body.si_email }).exec();
        if (data.length < 1) {
            res.json({
                status: false,
                detail : 'email',
                message: validate_message.EMAIL_IS_NOT_INVALID
            })
        }
        else {
            let status = await hash.compare_pass(req.body.si_pass_word, data[0].pass_word);
            if (status) {
                res.json({
                    status: true,
                    message: validate_message.EMAIL_INVALID,
                    token: jwt.sign({
                        email: data[0].email,
                        pass_word: data[0].pass_word
                    },SECRET_KEY)
                })
            }
            else{
                res.json({
                    status: false,
                    detail : 'pass_word',
                    message: validate_message.WRONG_PASSWORD,
                })
            }
        }
    } catch (error) {
        console.log(validate_message.ERROR_MESSAGE);
        console.log(error);
    }

}