import { Request, Response } from 'express';
import urlModel from '../models/url.model';
import expressAsyncHandler from 'express-async-handler';

/**
 * Handles a GET request to retrieve a URL.
 *
 * @param req - The request object containing the URL parameter.
 * @param res - The response object used to send the response back to the client.
 * @returns If a matching URL is found, the user is redirected to the corresponding `legacyUrl`.
 *          If no matching URL is found, a 404 error response is sent with a message indicating that the URL was not found.
 *          If there is an error during the process, a 500 error response is sent with a message indicating an internal server error.
 */
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

			res.status(200).json({
				message: `please wait while you're being redirected`,
			});
			setTimeout(() => {
				res.redirect(findUrl!.legacyUrl);
			}, 1000);
		} catch (error) {
			console.error(error);
			res.status(500).json({
				status: 'failed',
				message: 'Internal Server Error',
			});
		}
	}
);
