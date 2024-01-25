import { getQuestionById } from "@/lib/actions/question.action";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React from "react";

const page = async (params, searchParams) => {
	// const router = useRouter();
	// console.log(params, searchParams);
	const { id } = params.params.id;
	console.log("params", id);
	// { params: { id: '65aec71748eaba5731c90117' }, searchParams: {} }

	// make an call using this id;
	const result = await getQuestionById({ questionId: params.params.id });
	console.log("Result", result);
	console.log("Hello");

	return (
		<>
			<div className="flex-start w-full flex-col">
				<div className="flex w-full  flex-col-reverse gap-5 sm:flex-row sm:items-center sm:gap-2">
					<Link
						href={`/profile/${result.author.clerkId}`}
						className="flex items-center justify-start ap-2"
					>
						<Image
							width={33}
							height={33}
							src={result.author.picture}
							alt="Profile"
							className="rounded-full"
						/>
						<p className="paragraph-bold text-dark300_light700">
							{result.author.name}
						</p>
					</Link>
					<div className="flex justify-end items-center">VOting</div>
				</div>
				<h2 className="h2-bold text-dark200_light900 mt-3.5 w-full text-left">
					{result.title}
				</h2>
			</div>

			<div></div>
		</>
	);
};

export default page;
