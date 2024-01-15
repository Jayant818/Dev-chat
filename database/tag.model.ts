import mongoose from "mongoose";

export interface ITag extends Document {
	name: string;
	description: string;
	questions: mongoose.Schema.Types.ObjectId[];
	followers: mongoose.Schema.Types.ObjectId[];
	createdOn: Date;
}

const TagSchema = new mongoose.Schema<ITag>({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	questions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Question",
		},
	],
	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	createdOn: { type: Date, default: Date.now },
});

export const Tag = mongoose.models.Tag || mongoose.model("Tag", TagSchema);
