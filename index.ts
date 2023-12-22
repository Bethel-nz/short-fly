import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/Error_Handle';
import router from './routes/routes';
import { connect_DB } from './config/connect_db';
import { config } from 'dotenv';

config();
const app = express();

app.use(
	cors({
		credentials: true,
		origin: '*',
		methods: 'GET, POST',
	})
);
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/api', router);

const server = http.createServer(app);
connect_DB();
server.listen(5427, () => {
	console.log(`Server running on port ${5427}`);
});
