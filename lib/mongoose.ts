import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectToDB() {
	mongoose.set("strictQuery", true);
	if (!process.env.MONGODB_URL) {
		return console.log("MongoDB Url doesn't exist");
	}
	if (isConnected) {
		return console.log("Already Connected To DB");
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: "DebChat",
		});
		isConnected = true;

		console.log("Connected");
	} catch (error) {
		console.log("Can't able to Connect to the DB", error);
	}
}
