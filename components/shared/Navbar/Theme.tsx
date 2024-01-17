"use client";
import React from "react";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import { themes } from "@/constants/index";
import Image from "next/image";

const Theme = () => {
	const theme = useTheme();
	const { mode, setMode } = theme ?? { mode: "defaultMode", setMode: () => {} };

	return (
		<Menubar className="relative border-none bg-transparent shadow-none">
			<MenubarMenu>
				<MenubarTrigger className="w-20 h-20  focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
					<Image
						src={
							mode === "light"
								? "/assets/icons/sun.svg"
								: "/assets/icons/moon.svg"
						}
						alt={mode}
						width={23}
						height={23}
						className="active-theme"
					/>
				</MenubarTrigger>
				<MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
					{themes.map((theme) => {
						return (
							<MenubarItem
								className="flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-black-400"
								key={theme.value}
								onClick={() => {
									setMode(theme.value);

									if (theme.value !== "system") {
										localStorage.theme = theme.value;
									} else {
										localStorage.removeItem("theme");
									}
								}}
							>
								<Image
									src={theme.icon}
									alt={theme.value}
									width={23}
									height={23}
									className={mode === theme.value ? "active-theme" : ""}
								/>
								<p
									className={`body-semibold text-light-500 ${
										mode === theme.value
											? "text-primary-500"
											: " text-dark100_light900"
									} `}
								>
									{theme.label}
								</p>
							</MenubarItem>
						);
					})}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};

export default Theme;
