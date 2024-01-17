"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../../ui/input";

interface CustomProps {
	route: string;
	iconPosition: string;
	imgSrc: string;
	placeholder: string;
	otherClasses: string;
}

const LocalSearchBar = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClasses,
}: CustomProps) => {
	return (
		<div
			className={` ${otherClasses} background-light800_darkgradient flex gap-2 items-center w-full p-2 rounded min-h-[56px] `}
		>
			{iconPosition === "left" && (
				<Image src={imgSrc} width={32} height={32} alt="Local Search" />
			)}
			<Input
				type="text"
				placeholder={placeholder}
				onChange={() => {}}
				className="outline-none no-focus text-dark400_light800 border-0 shadow-none p-2 placeholder bg-transparent paragraph-regular"
			/>
			{iconPosition === "right" && (
				<Image src={imgSrc} width={32} height={32} alt="Local Search" />
			)}
		</div>
	);
};

export default LocalSearchBar;
