import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    nex: NextFunction
) => {
    console.log('Something went wrong', err);

        res.status(400).send({
            messasge: 'Something went wrong'
        });
}