"use client";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import LocalFilter from "@/components/shared/LocalFilter";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import HomeFilters from "@/components/Home/HomeFilters";
import Image from "next/image";
import NoResult from "@/components/shared/NoResult";
import { HomePageFilters } from "@/constants/filter";
import QuestionCards from "@/components/cards/QuestionCards";

export default function Home() {
	const questions = [
		{
			_id: 1,
			title: "Cascading Deletes in SQLAlchemy?",
			tags: [
				{ _id: 1, name: "Python" },
				{ _id: 2, name: "Sql" },
				{ _id: 3, name: "Database" },
			],
			author: {
				_id: "unique_author_id_1",
				name: "Jayant",
				picture: "url_to_author_picture_1.jpg",
			},
			upVotes: 20,
			// answer: 67,
			answer: [],
			// answer: [],
			views: 3,
			createdAt: new Date("2023-01-01"),
		},
		{
			_id: 2,
			title: "Working with React Hooks",
			tags: [
				{ _id: 4, name: "React" },
				{ _id: 5, name: "JavaScript" },
			],
			author: {
				_id: "unique_author_id_2",
				name: "Alice",
				picture: "url_to_author_picture_2.jpg",
			},
			upVotes: 15,
			// answer: 678,
			answer: [],
			views: 8,
			createdAt: new Date("2023-02-15"),
		},
	];

	return (
		<>
			<div className="flex flex-col-reverse sm:flex-row  sm:justify-between w-full gap-4 sm:items-center">
				<h1 className="h1-bold text-dark100_light900">All Questions</h1>
				<Link href="/" className="flex justify-end max-sm:w-full">
					<Button className="primary-gradient px-4 py-3 !text-light-900 min-h-[46px]">
						Ask a Question
					</Button>
				</Link>
			</div>
			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchBar
					route="/"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for questions"
					otherClasses="flex-1"
				/>

				<Filter
					filters={HomePageFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
					containerClasses="hidden max-md:flex"
				/>
			</div>

			<HomeFilters />

			<div className="mt-10 flex flex-col w-full gap-6">
				{questions.length > 0 ? (
					<>
						{questions.map((question) => (
							<QuestionCards
								key={question._id}
								_id={question._id}
								title={question.title}
								tags={question.tags}
								author={question.author}
								upVotes={question.upVotes}
								answer={question.answer}
								views={question.views}
								createdAt={question.createdAt}
							/>
						))}
					</>
				) : (
					<NoResult
						title="There's no question to show"
						description="Be the first to break the silence! Ask a Question and kickstart the discussion. our query could be the next big thing others learn from, Get Involved!"
						link="/ask-questions"
						linkTitle="Ask a Question"
					/>
				)}
			</div>
		</>
	);
}
