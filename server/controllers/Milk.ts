import { Request, Response } from "express";
import Milk from '../models/IMilk'




const readMilk = async (req: Request, res: Response) => {
    const milkId = req.params.id;
        return Milk.findById(milkId)
        .then((milk) => (milk ? res.status(200).json({ milk }) : res.status(404).json({ message: 'milk not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllMilk = async (req: Request, res: Response) => {
    return Milk.find()
    .then((milk) => res.status(200).json({ milk }))
    .catch((error) => res.status(500).json({ error }));
}


export default  { readMilk, readAllMilk }