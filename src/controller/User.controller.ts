import { request, response } from 'express';
import User from '../model/User';

//CREATE
async function create(/* req: Request, res: Response */) {
    const user = User.build(request.body);

    try {
        await user.save();
        response.status(201).send('saved');
    } catch (error) {
        response.status(400).send('failed');
    }
}

//READ
async function list(/* req: Request, res: Response */) {
    const users = await User.findAll();

    response.status(200).send(users);
}

async function find(/* req: Request, res: Response */) {
    const key = request.params.email;

    const user = await User.findByPk(key);

    if (user === null) {
        response.status(404).send('NOT FOUND');
    } else {
        response.status(200).send(user);
    }
}

// Update
async function update(/* req: Request, res: Response */) {
    const key = request.params.email;
    const name = request.body.nome;

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
        response.send('MODIFIED');
    } catch (err) {
        response.send('ERRO AO MODIFICAR: ' + err);
    }
}

// Delete
async function delete_user(/* req: Request, res: Response */) {
    const key = request.params.email;
    const user = await User.findByPk(key);

    if (user === null) {
        response.status(404).send('NOT FOUND');
    } else {
        try {
            await user.destroy();
            response.status(200).send('DELETED');
        } catch (err) {
            response.status(400).send('ERRO AO EXCLUIR: ' + err);
        }
    }
}

export { create, list, find, update, delete_user };