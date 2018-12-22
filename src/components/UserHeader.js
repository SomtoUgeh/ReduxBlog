import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

export class UserHeader extends Component {
	componentDidMount = () => {
		this.props.fetchUser(this.props.userId);
	};

	render() {
		const { user } = this.props;
		return user ? <div className="header">{user.name}</div> : null;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find(user => user.id === ownProps.userId)
	};
};

export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserHeader);
