import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
	return (
		<div className="relative w-full max-w-[600px] max-lg:hidden">
			<div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
				<Image
					src="/assets/icons/search.svg"
					width={32}
					height={32}
					alt="Search"
				/>
				<Input
					type="text"
					placeholder="Search globally..."
					className="text-dark400_light700 paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
				/>

				{/* <Input type="text" className="border-none focus:border-none rounded " /> */}
				{/* foucs ,  */}
			</div>
		</div>
	);
};

export default GlobalSearch;
