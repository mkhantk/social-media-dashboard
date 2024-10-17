import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import fb from "./assets/images/icon-facebook.svg";
import insta from "./assets/images/icon-instagram.svg";
import tt from "./assets/images/icon-twitter.svg";
import yt from "./assets/images/icon-youtube.svg";
import up from "./assets/images/icon-up.svg";
import down from "./assets/images/icon-down.svg";

function App() {
	const [isDark, setIsDark] = useState(false);

	console.log(isDark);

	return (
		<div
			className="m-auto min-h-screen"
			style={{
				background: isDark
					? "linear-gradient(to bottom, hsl(232, 19%, 15%) 0%, hsl(232, 19%, 15%) 14rem, hsl(230, 17%, 14%) 14rem)"
					: "linear-gradient(to bottom, hsl(225, 100%, 98%) 0%, hsl(225, 100%, 98%) 14rem, hsl(0, 0%, 100%) 14rem)",
			}}
		>
			<div className={`p-5 sm:w-5/6 m-auto max-w-[1440px] h-full`}>
				{/* header */}
				<div
					id="head"
					className="flex flex-col sm:flex-row sm:justify-between gap-5 mb-5"
				>
					<div className="border-b border-b-black sm:border-none py-5">
						<header
							className={` ${
								isDark ? "text-whiteText" : "text-veryDarkBlueText"
							} text-2xl font-bold`}
						>
							Social Media Dashboard
						</header>
						<div
							className={` ${
								isDark ? "text-desaturatedBlueText" : "text-darkGrayishBlueText"
							} text-lg font-bold`}
						>
							Total Followers: 23,004
						</div>
					</div>

					{/* dark mode  */}
					<div className="flex justify-between items-center gap-5">
						<span
							className={` ${
								isDark ? "text-desaturatedBlueText" : "text-darkGrayishBlueText"
							} text-lg font-bold`}
						>
							Dark Mode
						</span>
						<label
							htmlFor="darkMode"
							className={`${
								isDark
									? "bg-gradient-to-r from-gradientToggleDarkFrom to-gradientToggleDarkTo"
									: "bg-gradientToggleLight hover:bg-gradient-to-r hover:from-gradientToggleDarkFrom hover:to-gradientToggleDarkTo"
							} relative w-12 h-6 inline-block rounded-full`}
						>
							<input
								className="sr-only"
								type="checkbox"
								name="darkMode"
								id="darkMode"
								onChange={() => {
									setIsDark((prev) => !prev);
								}}
							/>
							<span
								className={`${
									isDark ? "bg-darkDesaturatedBlue" : "bg-white"
								} absolute block left-1 top-1 w-4 h-4 rounded-full transition-all duration-200 ${
									isDark ? "translate-x-6" : "translate-x-0"
								}`}
							></span>
						</label>
					</div>
				</div>

				{/* hero section of the dashboard  */}
				<div
					id="hero"
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12"
				>
					<div
						className={`${
							isDark ? "cardsDark" : "cardsLight"
						} cards border-t-4 border-facebook rounded-md py-5 flex flex-col gap-5`}
					>
						<div className="flex justify-center gap-5 items-center">
							<img src={fb} alt="" />
							<span
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								}`}
							>
								@nathanf
							</span>
						</div>
						<div className="flex flex-col items-center gap-2 justify-center">
							<h2
								className={`${
									isDark ? "text-whiteText" : "text-veryDarkBlueText"
								} font-bold text-5xl`}
							>
								1987
							</h2>
							<p
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								} font-light tracking-[0.25rem] uppercase text-xs`}
							>
								Followers
							</p>
						</div>
						<div className="flex justify-center items-center gap-2 ">
							<img src={up} alt="" />
							<span className="text-lg font-bold text-limeGreen">12 Today</span>
						</div>
					</div>
					<div
						className={`${
							isDark ? "cardsDark" : "cardsLight"
						} cards border-t-4 border-twitter rounded-md py-5 flex flex-col gap-5`}
					>
						<div className="flex justify-center gap-5 items-center">
							<img src={tt} alt="" />
							<span
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								}`}
							>
								@nathanf
							</span>
						</div>
						<div className="flex flex-col items-center gap-2 justify-center">
							<h2
								className={`${
									isDark ? "text-whiteText" : "text-veryDarkBlueText"
								} font-bold text-5xl`}
							>
								1044
							</h2>
							<p
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								} font-light tracking-[0.25rem] uppercase text-xs`}
							>
								Followers
							</p>
						</div>
						<div className="flex justify-center items-center gap-2 ">
							<img src={up} alt="" />
							<span className="text-lg font-bold text-limeGreen">99 Today</span>
						</div>
					</div>
					<div
						className={`${
							isDark ? "cardsDark" : "cardsLight"
						} cards border-t-4 border-gradientInstagramFrom rounded-md py-5 flex flex-col gap-5`}
					>
						<div className="flex justify-center gap-5 items-center">
							<img src={insta} alt="" />
							<span
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								}`}
							>
								@realnathanf
							</span>
						</div>
						<div className="flex flex-col items-center gap-2 justify-center">
							<h2
								className={`${
									isDark ? "text-whiteText" : "text-veryDarkBlueText"
								} font-bold text-5xl`}
							>
								11k
							</h2>
							<p
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								} font-light tracking-[0.25rem] uppercase text-xs`}
							>
								Followers
							</p>
						</div>
						<div className="flex justify-center items-center gap-2 ">
							<img src={up} alt="" />
							<span className="text-lg font-bold text-limeGreen">
								1099 Today
							</span>
						</div>
					</div>
					<div
						className={`${
							isDark ? "cardsDark" : "cardsLight"
						} cards border-t-4 border-youtube rounded-md py-5 flex flex-col gap-5`}
					>
						<div className="flex justify-center gap-5 items-center">
							<img src={yt} alt="" />
							<span
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								}`}
							>
								Nathan F.
							</span>
						</div>
						<div className="flex flex-col items-center gap-2 justify-center">
							<h2
								className={`${
									isDark ? "text-whiteText" : "text-veryDarkBlueText"
								} font-bold text-5xl`}
							>
								8239
							</h2>
							<p
								className={`${
									isDark
										? "text-desaturatedBlueText"
										: "text-darkGrayishBlueText"
								} font-light tracking-[0.25rem] uppercase text-xs`}
							>
								Subscribers
							</p>
						</div>
						<div className="flex justify-center items-center gap-2 ">
							<img src={down} alt="" />
							<span className="text-lg font-bold text-brightRed">
								144 Today
							</span>
						</div>
					</div>
				</div>

				{/* overview of the dashboard  */}
				<div id="overview" className="">
					<header
						className={`${
							isDark ? "text-desaturatedBlueText" : "text-darkGrayishBlueText"
						} my-5 text-2xl font-bold`}
					>
						Overview - Today
					</header>
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Page Views
								</span>
								<img src={fb} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									87
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={up} alt="" />
									<span className="text-sm text-limeGreen">3%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Likes
								</span>
								<img src={fb} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									52
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={down} alt="" />
									<span className="text-sm text-brightRed">2%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Likes
								</span>
								<img src={insta} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									5462
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={up} alt="" />
									<span className="text-sm text-limeGreen">2257%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Profile Views
								</span>
								<img src={insta} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									52k
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={up} alt="" />
									<span className="text-sm text-limeGreen">1375%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Retweets
								</span>
								<img src={tt} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									117
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={up} alt="" />
									<span className="text-sm text-limeGreen">303%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Likes
								</span>
								<img src={tt} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									507
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={up} alt="" />
									<span className="text-sm text-limeGreen">553%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold`}
								>
									Likes
								</span>
								<img src={yt} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									107
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={down} alt="" />
									<span className="text-sm text-brightRed">19%</span>
								</div>
							</div>
						</div>
						<div
							className={`${
								isDark ? "cardsDark" : "cardsLight"
							} cards p-5  flex flex-col gap-8 rounded-md`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`${
										isDark
											? "text-desaturatedBlueText"
											: "text-darkGrayishBlueText"
									} font-bold">Total Views`}
								>
									Total Views
								</span>
								<img src={yt} alt="" />
							</div>
							<div className="flex justify-between items-end">
								<span
									className={`${
										isDark ? "text-whiteText" : "text-veryDarkBlueText"
									} text-3xl font-bold`}
								>
									1407
								</span>
								<div className="flex gap-2 justify-center items-center">
									<img src={down} alt="" />
									<span className="text-sm text-brightRed">12%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-sm mt-5 text-darkGrayishBlueText text-center">
					Challenge by
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="#">Min Khant Kyaw</a>.
				</div>
			</div>
		</div>
	);
}

export default App;
