"use server";

import { Question } from "@/database/question.model";
import { connectToDB } from "../mongoose";
import mongoose from "mongoose";
import { Tag } from "@/database/tag.model";

interface questionProps {
	title: string;
	content: string;
	tags: string[];
	author: string;
}

export async function createQuestion(params: questionProps) {
	// Always use Try and catch block as it is a async function
	try {
		// Connect to DB
		connectToDB();

		const { title, content, author, tags } = params;

		// create the question
		// tags kyu nhi dale tagId insert karege agar tag phle se bane honge to unki id insert karege warna naya tag banayege
		const question = await Question.create({
			title,
			content,
			author,
			// path,
		});

		// isme hai id's store karege orr wo id's push karege
		const tagDocuments = [];

		for (const tag of tags) {
			// findOneAndUpdate - ye ek to filter leta hai orr dusra update kya karna hai, and third is additional options
			const existingTag = await Tag.findOneAndUpdate(
				{ name: { $regex: new RegExp(`^${tag}$`, "i") } },
				{ $setOnInsert: { name: tag }, $push: { questions: question._id } },
				{ upsert: true, new: true }
			);
			tagDocuments.push(existingTag._id);
		}

		// ab ham sab tags ki id ko daal sakte hai question collection mai
		await Question.findByIdAndUpdate(question._id, {
			// push kardo har ek tag Document ko
			$push: { tags: { $each: tagDocuments } },
		});
		console.log("DONE");
	} catch (error) {}
}
