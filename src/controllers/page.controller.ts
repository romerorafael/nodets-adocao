import { Request, Response} from 'express';
import { createMenuObjects } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet.model';

export const home = (req: Request, res: Response)=>{
    res.render('pages/page', {
        menu: createMenuObjects('all'),
        banner:{
            title: "Todos os animais",
            background: "allanimals.jpg"
        }, 
        pets: Pet.getAll()
    });
}

export const dogs = (req: Request, res: Response)=>{
    res.render('pages/page', {
        menu: createMenuObjects('dog'),
        banner:{
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        pets: Pet.getByType('dog')
    });
}

export const cats = (req: Request, res: Response)=>{
    res.render('pages/page', {
        menu: createMenuObjects('cat'),
        banner:{
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        pets: Pet.getByType('cat')
    });
}

export const fishes = (req: Request, res: Response)=>{
    res.render('pages/page', {
        menu: createMenuObjects('fish'),
        banner:{
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        pets: Pet.getByType('fish')
    });
}