// "use client";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeFilters from "@/components/Home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import { HomePageFilters } from "@/constants/filter";
import QuestionCards from "@/components/cards/QuestionCards";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
	// Steps
	// Make a fn in the question.action.ts but req- Post How??
	// return all the Data questions , ab isme referance ka bhi chakar hai
	// tag ka reference de rakha hai unko bhi find karna padega with their id's
	// structure karna padega
	// yaha populate karna padega
	// const questions = [

	// ];

	const result = await getQuestions({});
	console.log(result);

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
				{result.questions.length > 0 ? (
					<>
						{result.questions.map((question) => (
							<QuestionCards
								key={question._id}
								_id={question._id}
								title={question.title}
								tags={question.tags}
								author={question.author}
								upVotes={question.upVotes}
								answers={question.answers}
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
