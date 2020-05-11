import React, { Component } from "react";
import {
	HashRouter as Router,
	Route,
	// Redirect,
	// Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import Nav from "../Nav";
import Footer from "../Footer";

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Home from "../../pageviews/Home";
import UserReg from "../../pageviews/UserReg";
import RegConfirm from "../../pageviews/RegConfirm";
import Login from "../../pageviews/Login";
import UserHome from "../../pageviews/UserHome";
import FullOffers from "../../pageviews/FullOffers";
import ManageOffers from "../../pageviews/ManageOffers";
import ManageStory from "../../pageviews/ManageStory";
import Stories from "../../pageviews/Stories";
import HowItWorks from "../../pageviews/HowItWorks";
import AboutContact from "../../pageviews/AboutContact";
import Test from "../../pageviews/Test";
import "../../styles/App.css";

class App extends Component {
	// componentDidMount() {
	// 	this.props.dispatch({ type: "FETCH_USER" });
	//}

	render() {
		return (
			<Router>
				<Nav />
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/register" component={UserReg} />
				<Route exact path="/regconf" component={RegConfirm} />
				<Route exact path="/userhome" component={UserHome} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/offers" component={FullOffers} />
				<Route exact path="/offermgmt" component={ManageOffers} />
				<Route exact path="/add_story" component={ManageStory} />
				<Route exact path="/stories" component={Stories} />
				<Route exact path="/works" component={HowItWorks} />
				<Route exact path="/about" component={AboutContact} />
				<Route exact path="/test" component={Test} />

				<div className="footer">
					<Footer />
				</div>
			</Router>

			// <Router>
			// 	<div>
			// 		<Nav />
			// 		<Switch>
			// 			{/* Visiting localhost:3000 will redirect to localhost:3000/home */}
			// 			<Redirect exact from="/" to="/home" />
			// 			{/* Visiting localhost:3000/about will show the about page.
			//       This is a route anyone can see, no login necessary */}
			// 			<Route exact path="/about" component={AboutPage} />
			// 			<Route exact path="/home" component={HomePage} />
			// 			{/* For protected routes, the view could show one of several things on the same route.
			//       Visiting localhost:3000/user will show the UserPage if the user is logged in.
			//       If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
			//       Even though it seems like they are different pages, the user is always on localhost:3000/user */}
			// 			<ProtectedRoute exact path="/admin" component={UserPage} />
			// 			{/* This works the same as the other protected route, except that if the user is logged in,
			//       they will see the info page instead. */}
			// 			<ProtectedRoute exact path="/info" component={InfoPage} />
			// 			{/* This works the same as the other protected route, except that if the user is logged in,
			//       they will be redirected to the authRedirect path provided. */}
			// 			<ProtectedRoute
			// 				exact
			// 				path="/login"
			// 				authRedirect="/admin"
			// 				component={LoginPage}
			// 			/>
			// 			<ProtectedRoute
			// 				exact
			// 				path="/register"
			// 				authRedirect="/admin"
			// 				component={RegisterPage}
			// 			/>

			// 			{/* If none of the other routes matched, we will show a 404. */}
			// 			<Route render={() => <h1>404</h1>} />
			// 		</Switch>
			// 		<Footer />
			// 	</div>
			// </Router>
		);
	}
}

export default connect()(App);
