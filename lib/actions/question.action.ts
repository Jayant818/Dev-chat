"use server";

import { connectToDB } from "../mongoose";
import mongoose from "mongoose";

export async function createQuestion(params: any) {
	// Always use Try and catch block as it is a async function
	try {
		// Connect to DB
		connectToDB();
	} catch (error) {}
}
