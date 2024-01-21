"use server";

import { User } from "@/database/user.model";
import { connectToDB } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
	try {
		connectToDB();
		const { userId } = params;
		// const { userId, limit = 3 } = params;

		//tags find out karne hai jiske question ka user nai sabse jayada baar answer ya question ask kiya hai

		const user = await User.findById(userId);

		if (!user) throw new Error("User not found");

		// Get all the questions ,
		return ["tag1", "tag2", "tag3"];
	} catch (error) {
		console.log(error);
		throw new error();
	}
}
