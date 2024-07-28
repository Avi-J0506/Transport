import mongoose from "mongoose";

const truckSchema = mongoose.Schema(
    {
        trucknum:{
            type: String,
            required: true,
        },
        dname:{
            type: String,
            required: true,
        },
        phnumber:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Truck = mongoose.model('Truck', truckSchema)