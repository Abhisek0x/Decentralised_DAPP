import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
	const { isAuthenticated, logout } = useMoralis();

	if (!isAuthenticated) return <Login />;

	return (
		<div className="h-screen overflow-y-scroll bg-gradient-to-b from-sky-900 to-sky-400">
			<Head>
				<title>Chat Dapp</title>
				<meta
					name="This is a Chat app which is decentralised"
					content="Created by Abhisek"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col z-50 items-center justify-center w-full space-y-8">
				<div className=" max-w-screen-2xl mx-auto">
					<Header />
					<Messages />
				</div>
			</div>
		</div>
	);
}
