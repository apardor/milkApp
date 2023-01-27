import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IMilk {
    name: string;
    type: string;
    storage: number;
    id: string
}

const MilkSchema = new Schema({
    name: String,
    type: String,
    storage: Number,
    id: String
})

const Milk = mongoose.model<IMilk>("milkdbs", MilkSchema)


export default Milk;

