"use client";

import { createContext, useState, useEffect, useContext } from "react";

// It is like a class
interface ThemeContextType {
	mode: string;
	// means not returning anything
	setMode: (mode: string) => void;
}

// Hame Context Create kar diya hai
// Create Context bas thali bana k deta hai
// usme khana jab provide karte hai tab daalte hai
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ab wo context provide karna hai with some value
// theme provide karne ke baad ishe layout mai use karna padega
export function ThemeProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [mode, setMode] = useState<string>("light");

	const handleChangeMode = () => {
		//check karo ki localstorage mai theme konsi set hai agar null hai to system defined lelo
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setMode("dark");
			document.documentElement.classList.add("dark");
		} else {
			setMode("light");
			document.documentElement.classList.remove("dark");
		}
	};
	// Jab jab mode change hoga tab ye apne aap run ho jayega to koi function pass karne ki jarurat nhi hai
	useEffect(() => {
		handleChangeMode();
	}, [mode]);

	return (
		<ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

// ab hame agar ye context access karna hai to useContext hook hai

// useContext(ThemeContext) // For this you have to import ThemeContext in every file you want to use
// & we also have to import useContext every time so why don't we create own custom function/hook

export function useTheme() {
	return useContext(ThemeContext);
}
