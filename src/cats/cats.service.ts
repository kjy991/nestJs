import {Request, Response} from "express";
import {Cat, CatType} from "./cats.model";


export const readAllCat = (req: Request, res: Response) => {
    try {
        res.status(200).send({
            success: true,
            data: {
                Cat: Cat,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

export const readCat = (req: Request, res: Response) => {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var cat = Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
export const createCat = (req: Request, res: Response) => {
    try {
        var data = req.body;
        console.log(data);
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: {
                data: data,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
export const updateCat = (req: Request, res: Response) => {
    try {

        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: {
                cat: result,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
export const updatePartialCat = (req: Request, res: Response) => {
    try {

        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = {...cat, ...body};
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: {
                cat: result,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
export const deleteCat = (req: Request, res: Response) => {
    try {

        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id)

        res.status(200).send({
            success: true,
            data: newCat,
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

