import mongoose from "mongoose";
import { models, Document } from "mongoose";

export interface IConnection extends Document {
    name: string,
    email: string,
    company: string,
    phone: number,
    message: string
}


const connectionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: Number,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);
const Connection =
    models.Connection || mongoose.model<IConnection>("Connection", connectionSchema);

export default Connection;
