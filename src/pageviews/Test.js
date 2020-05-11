import React, { Component } from "react";
import "../styles/Pageview.css";
import { connect } from "react-redux";
import mapStoreToProps from "../redux/mapStoreToProps";

class Test extends Component {
	componentDidMount() {
		this.props.dispatch({
			type: "SET_TEST",
		});
	}
	render() {
		return (
			<div className="pagecore">
				<p>Test Page</p>
				{Test}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(Test);
