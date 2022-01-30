import Image from "next/image";
import React from "react";
import backimg from "../public/background.gif";
import mynft from "../public/mynft.png";
import { useMoralis } from "react-moralis";

function Login() {
	const { authenticate } = useMoralis();
	return (
		<div className="bg-black relative text-white">
			<div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-8">
				<div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 bg-opacity-50 hover:animate-pulse">
					<div className="px-6 py-4">
						<p className="text-gray-700 text-base space-y-5">
							<Image
								className="object-cover rounded-full "
								src={mynft}
								height={200}
								width={200}
							/>

							<button
								onClick={authenticate}
								className=" bg-red-400 rounded-lg p-3 font-extrabold  flex place-items-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-10 w-10 pr-4 animate-pulse"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
									/>
								</svg>
								Sign in using Wallet
							</button>
						</p>
					</div>
				</div>
			</div>

			<div className="w-full h-screen">
				<Image src={backimg} layout="fill" objectfit="cover" />
			</div>
		</div>
	);
}

export default Login;
