import React, { Component } from "react";
import "../styles/Pageview.css";
import { connect } from "react-redux";
import mapStoreToProps from "../redux/mapStoreToProps";

class FullOffers extends Component {
	componentDidMount() {
		this.props.dispatch({
			type: "GET_OFFERS",
		});
	}
	render() {
		return (
			<div className="pagecore">
				<p>Full Offers Page</p>
				<p>Here are the current offers: {this.props.store.offers.off_detail}</p>
			</div>
		);
	}
}
export default connect(mapStoreToProps)(FullOffers);
