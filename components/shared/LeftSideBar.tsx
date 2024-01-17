"use client";
import React from "react";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";

const LeftSideBar = () => {
	const pathname = usePathname();
	return (
		<aside className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
			{/* Top - Jaha pe sare Links honge  */}
			{/* <SidebarContent /> */}
			<div>
				{sidebarLinks.map((link, ind) => {
					const isActive: boolean = pathname === link.route;
					return (
						<Link
							href={link.route}
							key={link.route}
							className={`${
								isActive
									? "primary-gradient rounded-lg text-light-900"
									: "text-dark300_light900"
							} flex items-center justify-start bg-transparent gap-3 p-3`}
						>
							<Image
								src={link.imgURL}
								width={20}
								height={20}
								alt={link.label}
								className={`${isActive ? "" : "invert-colors"}`}
							/>
							<p
								className={`${
									isActive ? "base-bold" : "base-medium"
								} max-md:hidden`}
							>
								{link.label}
							</p>
						</Link>
					);
				})}
			</div>

			{/* Bottom - for SignUp SignIn , LogOut */}
			<div>
				<SignedOut>
					<div className="flex flex-col gap-3">
						<Link href="/sign-in">
							<Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
								<Image
									src="/assets/icons/account.svg"
									alt="sign in"
									width={20}
									height={20}
									className="invert-colors lg:hidden"
								/>
								<span className="primary-text-gradient max-lg:hidden">
									Log In
								</span>
							</Button>
						</Link>

						<Link href="/sign-up">
							<Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
								<Image
									src="/assets/icons/sign-up.svg"
									alt="sign up"
									width={20}
									height={20}
									className="invert-colors lg:hidden"
								/>
								<span className="max-lg:hidden">Sign Up</span>
							</Button>
						</Link>
					</div>
				</SignedOut>
				<SignedIn>
					<Link href="/logOut">
						<Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
							<Image
								src="/public/assets/icons/user.svg"
								width={20}
								height={20}
								alt="LogOut"
							/>
							<span className="primary-text-gradient ax-lg:hidden">
								Log Out
							</span>
						</Button>
					</Link>
				</SignedIn>
			</div>
		</aside>
	);
};

export default LeftSideBar;
