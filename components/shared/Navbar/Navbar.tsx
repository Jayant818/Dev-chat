import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import GlobalSearch from "@/components/shared/search/GlobalSearch";
import MobileNav from "./MobileNav";
// TODO
// 1) ShadCN se ui leke aake theme wala implement karna hai
// 2) Theme hai wo dusri banegi nayi file
// 3) functionality implemeent karni hai with localstorage & system
// 4) Uske baad mobile version taiyar karna hai jiske liye sheet use karni padegi
// 5) focus wala dekhna hai
// 6) Global search wala design dekhna hai

const Navbar = () => {
	return (
		<nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
			<Link href="/" className="flex gap-3">
				<Image
					src="/assets/images/site-logo.svg"
					alt="DevChat"
					width={23}
					height={23}
				/>
				<p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
					Dev<span className="text-primary-500">Chat</span>
				</p>
			</Link>
			<GlobalSearch />
			<div className="flex-between gap-5">
				<Theme />
				<SignedIn>
					<UserButton
						afterSignOutUrl="/"
						appearance={{
							elements: {
								avatarBox: "h-10 w-10",
							},
							variables: {
								colorPrimary: "#ff7000",
							},
						}}
					/>
				</SignedIn>
			</div>
			<MobileNav />
		</nav>
	);
};

export default Navbar;
