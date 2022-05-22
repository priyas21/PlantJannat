import React from "react";
import Header from "./Header";
import Plants from "./Plants";
import Layout from "./layout";

function App() {
	return(
		<Layout startingTheme="light">
			<div>
				<Header/>
				<Plants/>
			</div>
		</Layout>
	);
}

export default App;