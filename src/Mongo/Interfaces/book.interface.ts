import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


export interface Book extends Document
{
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly name:          String,
    readonly author:        Object,
    readonly language:      String,
    readonly releaseYear:   Number,
    readonly publisher:     String,
    readonly pages:         Number
}