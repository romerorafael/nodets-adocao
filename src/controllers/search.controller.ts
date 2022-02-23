import { Request, Response} from 'express';
import { Pet } from '../models/Pet.model';
import { createMenuObjects } from '../helpers/createMenuObject';


export const search = (req: Request, res: Response)=>{

    let searchTerm: string = req.query.q as string;

    if(!searchTerm){
        res.redirect('/')
        return;
    }
        
    res.render('pages/page', {
        menu: createMenuObjects(""),
        pets: Pet.getByRace(searchTerm),
        searchTerm
    });

}