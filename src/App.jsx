import { lazy, Suspense } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Loader from "./ui/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
	return (
		<>
			<GlobalStyles />
			<Suspense fallback={<Loader />}>
				<Homepage />
			</Suspense>
		</>
	);
}

export default App;
