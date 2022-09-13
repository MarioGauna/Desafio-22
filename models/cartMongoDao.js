import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    timestamp:{type:Date,default: Date.now},
    products: []
});

export const CarritosModel = mongoose.model("carritos", Schema);