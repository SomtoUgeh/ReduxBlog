import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

export class UserHeader extends Component {
	componentDidMount = () => {
		this.props.fetchUser(this.props.user);
	};

	render() {
		return <div>UserHeader</div>;
	}
}

export default connect(
	null,
	{ fetchUser }
)(UserHeader);
