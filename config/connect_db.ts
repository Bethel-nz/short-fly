import mongoose from 'mongoose';

const connect_DB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_DB as string);
		console.log('🔥:: Connected to DB! :: ', connect.connection.name);
	} catch (err: any) {
		console.log(err);
		process.exit(1);
	}
};

export { connect_DB };
