import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import mynft from "../public/mynft.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
	const { user } = useMoralis();
	return (
		<div className=" sticky top-0 ml-5p-5 z-50 bg-slate-800 shadow-sm border-sky-800 text-white">
			<div className=" grid grid-cols-5 lg:grid-cols-6 items-end lg:inline-grid">
				<div className=" relative h-24 w-24 mx-auto hidden lg:inline-grid mr-20 mb-20 ml-5 border-8">
					<Image
						src={mynft}
						layout="fill"
						objectFit="cover"
						className=" rounded-full"
					/>
				</div>
				<div className=" text-left lg:text-center col-span-4 pb-5">
					<div className="h-48 w-48 relative lg:mx-auto border-8 border-blue-900 rounded-full">
						<Avatar logoutOnPress />
					</div>
					<h1 className=" text-3xl">Welcome to Abhisek's Chat Dapp</h1>
					<h2 className=" text-5xl font-bold truncate">{user.getUsername()}</h2>
					<ChangeUsername />
				</div>
			</div>
		</div>
	);
}

export default Header;
