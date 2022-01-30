import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
	const { setUserData, isUserUpdating, userError, user } = useMoralis();
	const setUserName = () => {
		const username = prompt(
			`Enter your new Username (current: ${user.getUsername()})`
		);

		if (!username) return;

		setUserData({
			username,
		});
	};
	return (
		<div>
			<div className=" text-blue-400 text-sm absolute top-5 right-5 ">
				<button
					disabled={isUserUpdating}
					onClick={setUserName}
					className=" hover:text-rose-700"
				>
					Change your Username
				</button>
			</div>
		</div>
	);
}

export default ChangeUsername;
