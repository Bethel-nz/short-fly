import { Document } from 'mongoose';

export type Url = {
	legacyUrl: string;
	shortUrl: string;
	createdAt: Date;
} & Document;
