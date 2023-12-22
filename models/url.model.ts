import { Schema, model } from 'mongoose';
import { Url } from '../types';

const urlSchema = new Schema({
	legacyUrl: {
		type: String,
	},
	shortUrl: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

export default model<Url>('Url', urlSchema);
