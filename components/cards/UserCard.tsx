import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import { TargetIcon } from "lucide-react";
import { getTopInteractedTags } from "@/lib/actions/tag.action";
import { Badge } from "../ui/badge";

interface UserCardProps {
	name: string;
	username: string;
	picture: string;
	_id: string;
	clerk_id: string;
}

const UserCard = ({
	name,
	username,
	picture,
	_id,
	clerk_id,
}: UserCardProps) => {
	const tags = ["Next JS", "SSR", "CSS"];
	// const tags = getTopInteractedTags(_id);
	return (
		<Link
			href={`/profile/${clerk_id}`}
			className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
		>
			<div className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8 ">
				<div>
					<Image
						width={100}
						height={100}
						src={picture}
						alt="User profile picture"
						className="rounded-full"
					/>
				</div>
				<div className="mt-4 text-center">
					<h3 className="h3-bold text-dark200_light900 line-clamp-1">{name}</h3>
					<p className="body-regular text-dark500_light500 mt-2">@{username}</p>
				</div>
				<div className="mt-5">
					{tags.length > 0 ? (
						<>
							{tags.map((tag, i) => (
								<RenderTag key={i} _id={i} name={tag} />
							))}
						</>
					) : (
						<Badge>No tags yet</Badge>
					)}
				</div>
			</div>
		</Link>
	);
};

export default UserCard;
