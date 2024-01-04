import LeftSideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/Navbar/Navbar";
import RightSideBar from "@/components/shared/RightSideBar";
import React from "react";

// For every Page we can have a Different Layout.tsx
// Sign In and out wale mai navigation bar nhi hota
// to ishi mai use karege

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="background-light850_dark100 relative">
			<Navbar />
			<div className="flex">
				<LeftSideBar />
				<section className="min-h-screen flex flex-col flex-1 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
					<div className="mx-auto w-full max-w-5xl">{children}</div>
				</section>
				<RightSideBar />
			</div>
			Toaster
		</main>
	);
};

export default Layout;
