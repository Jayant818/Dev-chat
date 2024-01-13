import mongoose, { Schema } from "mongoose";

// Document provides the property such as _id etc
export interface IQuestion extends mongoose.Document {
	title: string;
	content: string;
	tags: mongoose.Schema.Types.ObjectId[];
	author: mongoose.Schema.Types.ObjectId;
	upVotes: mongoose.Schema.Types.ObjectId[];
	downVotes: mongoose.Schema.Types.ObjectId[];
	answers: mongoose.Schema.Types.ObjectId[];
	views: number;
	isSolved: boolean;
}

const questionSchema = new mongoose.Schema<IQuestion>(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		tags: [
			{
				// Need kya thi iski
				// why not
				// type:String
				type: Schema.Types.ObjectId,
				ref: "Tag",
			},
		],
		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		upVotes: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		downVotes: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		answers: [
			{
				type: Schema.Types.ObjectId,
				ref: "Answer",
			},
		],
		views: {
			type: Number,
			default: 0,
		},
		isSolved: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export const Question =
	mongoose.models.Question ||
	mongoose.model<IQuestion>("Question", questionSchema);

// Saved as questions in DB
