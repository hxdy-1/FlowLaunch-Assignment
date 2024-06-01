import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Flow Launch Assignment",
	description: "An assignment for internship done by Adbul Haadi Momin",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
