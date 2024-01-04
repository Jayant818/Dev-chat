"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import RenderTag from "./RenderTag";

const hotQuestions: any = [];
const popularTags: any = [];
const RightSideBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<aside className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
			<div>
				{/*Questions  */}
				<h3 className="h3-bold">Top Questions</h3>
				{hotQuestions.map((question) => (
					<Link
						href={`/question/${question._id}`}
						className="flex gap-7 items-center justify-center"
					>
						<p className="body-medium text-dark500_light700">
							{question.title}
						</p>
						<Image
							src="/assets/icons/chevron-right.svg"
							width={20}
							height={20}
							alt="chevron-right"
							className="invert-colors"
						/>
					</Link>
				))}
			</div>
			<div className="mt-16">
				<h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
				<div className="flex flex-col gap-4 mt-7">
					{popularTags.map((tag) => (
						<RenderTag
							key={tag._id}
							_id={tag._id}
							name={tag.name}
							totalQuestions={tag.totalQuestions}
							showCount
						/>
					))}
				</div>
			</div>
		</aside>
	);
};

export default RightSideBar;
