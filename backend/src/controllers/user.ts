import { Request, Response } from "express";
import User from "../model/user";
import ResponseService from "../helpers/response"
import { MongoError } from "mongodb";

export default class UserController {
    public async getAll(req: Request, res: Response) {
        try {
            const users = await User.find();
            ResponseService.successResponse(res, users);
        }
        catch (err) {
            ResponseService.mongoErrorResponse(res, err);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            const user = await User.findOne({
                _id: req.params.userId
            });
            ResponseService.successResponse(res, user);
        }
        catch (err) {
            ResponseService.mongoNotFoundResponse(res, err);
        }
    }
}