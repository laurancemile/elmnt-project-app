import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Loader from "./ui/Loader";
import PageNotFound from "./ui/PageNotFound";
import UnderMaintenance from "./ui/Maintanance";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<UnderMaintenance />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
