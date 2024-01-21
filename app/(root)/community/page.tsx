import HomeFilters from "@/components/Home/HomeFilters";
import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { UserFilters } from "@/constants/filter";
import { getAllUser } from "@/lib/actions/user.action";
import React from "react";

const page = async () => {
	const result = await getAllUser({});
	console.log(result);
	return (
		<>
			<div className="flex justify-start ">
				<h1 className="h1-bold text-dark100_light900">All Users</h1>
			</div>
			<div className="mt-10 flex justify-between gap-5 max-sm:flex-col">
				<LocalSearchBar
					route="/"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for Amazing Minds"
					otherClasses="flex-1"
				/>
				<Filter
					filters={UserFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
					containerClasses=""
				/>
			</div>
			<div className="mt-10 flex flex-wrap">
				{result.users.length > 0 ? (
					<>
						{result.users.map((user: any) => (
							<UserCard
								key={user._id}
								_id={user._id}
								name={user.name}
								username={user.username}
								picture={user.picture}
								clerk_id={user.clerk_id}
							/>
						))}
					</>
				) : (
					<NoResult
						title="There's no Users to show"
						description="Be the first to break the silence! Sign Up"
						link="/"
						linkTitle="Sign Up"
					/>
				)}
			</div>
		</>
	);
};

export default page;
