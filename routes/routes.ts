import { Router } from 'express';
import { shortenUrl } from '../controllers/shorten-url.controller';
import { getURL } from '../controllers/url.controller';

const router = Router();

/**
 * Handles the '/shorten-url' endpoint.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A response with a success message and the newly created URL object, or a response with an error message.
 */
router.post('/shorten-url', shortenUrl);

/**
 * Retrieves the URL associated with the provided route parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */
router.get('/get-url/:url', getURL);

export default router;
