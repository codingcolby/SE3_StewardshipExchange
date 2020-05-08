import React from "react";
import "../styles/Pageview.css";
import { connect } from "react-redux";
import mapStoreToProps from "../redux/mapStoreToProps";

const Home = (props) => (
	<div className="pagecore">
		<h3>Home Page</h3>
		<p>
			Welcome to the Stewardship Exchange.Here are the current offers:
			{props.store.offers}
		</p>
	</div>
);

export default connect(mapStoreToProps)(Home);
