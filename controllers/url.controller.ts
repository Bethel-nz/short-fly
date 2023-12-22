import { Request, Response } from 'express';
import urlModel from '../models/url.model';
import expressAsyncHandler from 'express-async-handler';

export const getURL = expressAsyncHandler(
	async (req: Request, res: Response) => {
		const { url } = req.params;

		try {
			const shortUrl = url;
			const findUrl = await urlModel.findOne({
				shortUrl,
			});
			if (!findUrl) {
				res.status(404).json({
					status: 'failed',
					message: 'URL not found',
				});
			}

			res.redirect(findUrl!.legacyUrl);
		} catch (error) {
			console.error(error);
			res.status(500).json({
				status: 'failed',
				message: 'Internal Server Error',
			});
		}
	}
);
