import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface customProps {
	title: string;
	description: string;
	link: string;
	linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: customProps) => {
	return (
		<div className="mt-10  w-full flex gap-4 flex-col justify-center items-center ">
			<Image
				src="/assets/images/light-illustration.png"
				width={270}
				height={200}
				alt="No-Result illustration"
				className="block object-contain dark:hidden"
			/>
			<Image
				src="/assets/images/dark-illustration.png"
				width={270}
				height={200}
				alt="No-Result illustration"
				className="hidden object-contain dark:block"
			/>

			<h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
			<p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
				{description}
			</p>
			<Link href={link}>
				<Button className=" text-light-900 px-4 py-3 paragrah-medium mt-5 min-h-[46px] rounded-lg bg-primary-50 ">
					{linkTitle}
				</Button>
			</Link>
		</div>
	);
};

export default NoResult;
