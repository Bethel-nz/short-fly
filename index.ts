import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/Error_Handle';
import router from './routes/routes';
import { connect_DB } from './config/connect_db';
import { config } from 'dotenv';

config();
export const app = express();

app.use(
	cors({
		credentials: true,
		methods: 'GET, POST',
	})
);
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/api', router);

const server = http.createServer(app);
connect_DB();
server.listen(3000, () => {
	console.log(`Server running on port ${3000}`);
});
