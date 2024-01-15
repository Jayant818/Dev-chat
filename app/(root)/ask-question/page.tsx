import Question from "@/components/Forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestions = async () => {
	// const { userId } = auth();
	const userId = "clerkId123";
	if (!userId) redirect("/login");

	const mongoUser = await getUserById({ userId });
	console.log(mongoUser);

	return (
		<div>
			<h3 className="h3-bold text-light900_black100">Ask Questions</h3>
			<div className="mt-3.5">
				<Question userId={JSON.stringify(mongoUser._id)} />
			</div>
		</div>
	);
};

export default AskQuestions;
