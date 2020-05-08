import React from "react";
import "../styles/Pageview.css";
import { connect } from "react-redux";
import mapStoreToProps from "../redux/mapStoreToProps";

const FullOffers = (props) => (
	<div className="pagecore">
		<p>Full Offers Page</p>
		<p>Here are the current offers: {props.store.FullOffers}</p>
	</div>
);

export default connect(mapStoreToProps)(FullOffers);
