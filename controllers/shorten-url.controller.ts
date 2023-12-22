import { Request, Response, NextFunction } from 'express';
import { generateUniqueID } from '../utils/GenerateUniqueID';
import { Url } from '../types';
import urlModel from '../models/url.model';
import expressAsyncHandler from 'express-async-handler';

export const shortenUrl = expressAsyncHandler(
	async (req: Request, res: Response) => {
		const { url }: { url: string } = req.body;

		try {
			if (!url) {
				res.status(400).json({
					status: 'Failed',
					message: 'Please provide a valid URL.',
				});
			}
			const sfID = await generateUniqueID();
			const data = {
				legacyUrl: url,
				shortUrl: sfID,
			};

			const newURL = new urlModel(data);

			await newURL.save();

			res.status(201).json({
				status: 'success',
				message: 'URL shortened successfully',
				data: newURL,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({
				status: 'failed',
				message: 'Internal Server Error',
			});
		}
	}
);
