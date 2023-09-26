import Location from '../model/Location';
import { Request, Response } from 'express';
import Maker from '../public/assets/Marker';
import map from '../public/map';

const icon = '../public/assets/point.svg';

//CREATE
async function create(req: Request, res: Response) {
    const nome = req.body.name;
    const coord = [req.body.coordinates];
    
    try {
        await Location.create(
            {
                name: nome,
                geom: {
                    type: 'Point',
                    coordinates: coord
                }
            }
        );
        res.status(201).send('saved');
    } catch (error) {
        res.status(400).send('failed');
    }
}

//READ
async function list(req: Request, res: Response) {
    const locations = await Location.findAll();

    for (const local of locations) {
        const marker = new Maker(map, icon, local.geom.coordinates);

        
        // console.log(marker);
    }

    res.status(200).send(locations);
}

async function find(req: Request, res: Response) {
    const key = req.params.email;

    const local = await Location.findByPk(key);

    if (local === null) {
        res.status(404).send('NOT FOUND');
    } else {
        res.status(200).send(local);
    }
}

export { create, list, find };