import React from "react";
import Counter from "./Contador";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center"><i className="fa-solid fa-clock"></i>
			<div id="contador"></div>
		</div>
	);
};

export default Home;
