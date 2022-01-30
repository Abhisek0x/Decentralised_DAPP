import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<MoralisProvider
			id={process.env.NEXT_PUBLIC_APP_ID}
			url={process.env.NEXT_PUBLIC_SERVER_URL}
		>
			<Component {...pageProps} />
		</MoralisProvider>
	);
}

export default MyApp;
