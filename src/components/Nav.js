import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import "../styles/Nav.css";
import mapStoreToProps from "../redux/mapStoreToProps";

const Nav = () => (
	// const Nav = (props) => {
	// 	let loginLinkData = {
	// 		path: "/home",
	// 		text: "Login / Register",
	// 	};

	// 	if (props.store.user.id != null) {
	// 		loginLinkData.path = "/admin";
	// 		loginLinkData.text = "Home";
	// 	}

	// return (
	<div>
		<div className="nav">
			<img src="images/archivesstorage.jpg" alt="storage" />
			<h2 className="nav-title">The Stewardship Exchange</h2>

			<p>
				the <em>first</em> online resource for cultural heritage agencies to
				share surplus preservation and conservation material for collections
				care
			</p>

			{/* <div className="nav-right">
				<Link className="nav-link" to={loginLinkData.path}> */}
			{/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
			{/* {loginLinkData.text}
				</Link> */}
			{/* Show the link to the info page and the logout button if the user is logged in */}
			{/* {props.store.user.id && (
					<>
						<Link className="nav-link" to="/info">
							Info Page
						</Link> */}
			{/* <LogOutButton className="nav-link" /> */}
			{/* </>
				)} */}
			{/* Always show this link since the about page is not protected */}
			<Link className="nav-link" to="/login">
				Log In
			</Link>
			<Link className="nav-link" to="/register">
				Register
			</Link>
			<Link className="nav-link" to="/works">
				How It Works
			</Link>
			<Link className="nav-link" to="/stories">
				Exchange Stories
			</Link>
			<Link className="nav-link" to="/about">
				About / Contact
			</Link>
		</div>
		<div className="noplacelike">
			<Link to="/home">Home</Link>
		</div>
	</div>

	//</div>
);
// };

export default connect(mapStoreToProps)(Nav);
