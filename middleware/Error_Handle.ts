import { NextFunction, Response, Request } from 'express';
import { constants } from '../constants/constants';

/**
 * Handles different types of errors and sends appropriate responses based on the error status code.
 *
 * @param {Error} err - The error object that contains information about the error.
 * @param {Object} req - The request object that represents the HTTP request.
 * @param {Object} res - The response object that represents the HTTP response.
 * @param {Function} next - The next function in the middleware chain.
 */
export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = res.statusCode ? res.statusCode : 500;
	switch (statusCode) {
		case constants.VALIDATION_ERROR:
			res.json({
				title: 'Validation Failed',
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		case constants.NOT_FOUND:
			res.json({
				title: 'Not Found',
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		case constants.UNAUTHORIZED:
			res.json({
				title: 'Unauthorized Access',
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		case constants.FORBIDDEN:
			res.json({
				title: 'Forbidden Access',
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		case constants.SERVER_ERROR:
			res.json({
				title: 'Server Error',
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		default:
			console.log(`No Error, All good`);
			break;
	}
	next();
};
