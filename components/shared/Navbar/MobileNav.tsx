"use client";

import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const SidebarContent = () => {
	const pathname = usePathname();
	return (
		<>
			{sidebarLinks.map((link, ind) => {
				const isActive: boolean = pathname === link.route;
				return (
					<Link
						href={link.route}
						key={link.label}
						className={`${
							isActive
								? "primary-gradient rounded-lg text-light-900"
								: "text-dark300_light900"
						} flex items-center justify-start gap-4 bg-transparent p-3`}
					>
						<Image
							src={link.imgURL}
							width={20}
							height={20}
							alt={link.label}
							className={`${isActive ? "" : "invert-colors"}`}
						/>
						<p className={`${isActive ? "base-bold" : "base-medium"}`}>
							{link.label}
						</p>
					</Link>
				);
			})}
		</>
	);
};

const MobileNav = () => {
	return (
		<section className="flex h-full flex-col gap-6 ">
			<Sheet>
				<SheetTrigger asChild>
					<Image
						src="/assets/icons/hamburger.svg"
						alt="Menu"
						width={36}
						height={36}
						className="invert-colors sm:hidden"
					/>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="background-light900_dark200 border-none"
				>
					<SheetHeader>
						<Link href="/" className="flex gap-1 items-center pb-5">
							<Image
								src="/assets/images/site-logo.svg"
								alt="DevChat"
								width={23}
								height={23}
							/>
							<p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 ">
								Dev<span className="text-primary-500">Chat</span>
							</p>
						</Link>

						<SidebarContent />
						<SignedOut>
							<div className="flex flex-col gap-3">
								<SheetClose asChild>
									<Link href="/sign-in">
										<Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
											<span className="primary-text-gradient">Log In</span>
										</Button>
									</Link>
								</SheetClose>

								<SheetClose asChild>
									<Link href="/sign-up">
										<Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
											Sign Up
										</Button>
									</Link>
								</SheetClose>
							</div>
						</SignedOut>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
