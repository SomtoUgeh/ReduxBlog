import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../reducers";

export class UserHeader extends Component {
	componentDidMount = () => {
		this.props.fetchUser();
	};

	render() {
		return <div>UserHeader</div>;
	}
}

export default connect(
	null,
	{ fetchUser }
)(UserHeader);
