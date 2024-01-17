import Question from "@/components/Forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestions = async () => {
	const { userId } = auth();
	if (!userId) redirect("/login");

	const mongoUser = await getUserById({ userId });
	console.log(mongoUser);

	return (
		<div>
			<h3 className="h3-bold text-light900_black100">Ask Questions</h3>
			<div className="mt-3.5">
				{/* Stringify use kyo kiya hai 
					we got this result from mongoDB 
					 
					{
						_id`: new ObjectId('65a54564466a54ddcfa08fa4'),
						clerkId: 'clerkId123',
						name: 'John Doe',
						username: 'johndoe',
						email: 'john.doe@example.com',
						password: 'password123',
						bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						picture: 'https://example.com/johndoe.jpg',
						location: 'City, Country',
						portfolioWebsite: 'https://johndoeportfolio.com',
						reputation: 100,
						saved: [ new ObjectId('5fe7e32a77c853b141227e92') ],
						onboarded: true,
						joinedAt: 2024-01-17T12:34:56.789Z
						}`

						bina iske bhejege to ye error aayega
						Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
  <... userId={{}}>
						ObjectId includes a toJSON method which is causing the error
						to remove that 
						To fix this, you can convert the MongoDB-specific types, such as ObjectId, to plain JavaScript objects
						1) toString()
						2) JSON.Stringify() - converts into string [ also used to convert objects onto JSON kyoki JSON mai key string hoti hai]
						
				*/}
				<Question userId={JSON.stringify(mongoUser._id)} />
			</div>
		</div>
	);
};

export default AskQuestions;
