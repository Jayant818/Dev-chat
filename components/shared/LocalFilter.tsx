import React from "react";
import Filter from "./Filter";
import { Badge } from "../ui/badge";

const LocalFilter = () => {
	const FilterItems = ["Newest", "Recommended", "Frequent", "Unanswered"];
	return (
		<div className="lg:w-full">
			<Filter
				placeholder="Select a Filter"
				items={FilterItems}
				otherClasses="lg:hidden"
			/>
			<div className="w-full hidden lg:flex gap-4 justify-start ">
				{FilterItems.map((Item) => (
					<Badge className="text-dark400_light700  background-light800_darkgradient paragraph-regular rounded border-2 px-4 py-3">
						{Item}
					</Badge>
				))}
			</div>
		</div>
	);
};

export default LocalFilter;
