"use server";

import { User } from "@/database/user.model";
import { connectToDB } from "../mongoose";
import {
	CreateUserParams,
	DeleteUserParams,
	GetAllUsersParams,
	UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import { Question } from "@/database/question.model";

export async function getAllUser(params: GetAllUsersParams) {
	try {
		connectToDB();

		// 	page?: number;
		// pageSize?: number;
		// filter?: string;
		// searchQuery?: string;
		const { page = 1, pageSize = 10, filter, searchQuery } = params;

		const user = await User.find({})
			.populate({
				path: "saved",
				model: Question,
			})
			.sort({ reputation: -1 });
		// sort based on views karna padega
		return { users };
	} catch (error) {
		console.log("Error aa gaya bhai log", error);
		throw error;
	}
}

export async function getUserById(params: any) {
	try {
		// connect to DB is mandatory
		await connectToDB();

		const { userId } = params;

		const user = await User.findOne({ clerkId: userId });

		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function createUser(userData: CreateUserParams) {
	try {
		// connect to DB is mandatory
		connectToDB();

		const user = await User.create(userData);

		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
export async function updateUser(userData: UpdateUserParams) {
	try {
		// connect to DB is mandatory
		connectToDB();

		await User.findOneAndUpdate(
			{ clerkId: userData.clerkId },
			userData.updateData,
			{
				//  creates new instance of DB
				new: true,
			}
		);

		revalidatePath(userData.path);
	} catch (error) {
		console.log(error);
		throw error;
	}
}
export async function deleteUser(userData: DeleteUserParams) {
	try {
		// connect to DB is mandatory
		connectToDB();

		// referance of the user
		const user = await User.findOneAndDelete({ clerkId: userData.clerkId });

		if (!user) {
			throw new Error("User not found");
		}

		//  Delete user , comments, questions & answers etc from DB

		// getting user question id
		// const userQuestonIds = await Question.find({
		// 	author: userData.clerkId,
		// }).distinct("_id");

		// delete user question
		await Question.deleteMany({ author: userData.clerkId });

		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
