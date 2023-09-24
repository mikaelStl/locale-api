import User from '../model/User';
import { Request, Response } from 'express';

//CREATE
async function create(req: Request, res: Response) {
    const user = User.build(req.body);

    try {
        await user.save();
        res.status(201).send('saved');
    } catch (error) {
        res.status(400).send('failed');
    }
}

//READ
async function list(req: Request, res: Response) {
    const users = await User.findAll();

    res.status(200).send(users);
}

async function find(req: Request, res: Response) {
    const key = req.params.email;

    const user = await User.findByPk(key);

    if (user === null) {
        res.status(404).send('NOT FOUND');
    } else {
        res.status(200).send(user);
    }
}

// Update
async function update(req: Request, res: Response) {
    const key = req.params.email;
    const name = req.body.nome;

    try {
        await User.update(
            {
                nome: name
            },
            {
                where: {
                    email: key
                }
            }
        );
        res.send('MODIFIED');
    } catch (err) {
        res.send('ERRO AO MODIFICAR: ' + err);
    }
}

// Delete
async function delete_user(req: Request, res: Response) {
    const key = req.params.email;
    const user = await User.findByPk(key);

    if (user === null) {
        res.status(404).send('NOT FOUND');
    } else {
        try {
            await user.destroy();
            res.status(200).send('DELETED');
        } catch (err) {
            res.status(400).send('ERRO AO EXCLUIR: ' + err);
        }
    }
}

export { create, list, find, update, delete_user };