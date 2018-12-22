import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostandUsers } from "../actions";
import UserHeader from "./UserHeader";

export class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostandUsers();
	}

	render() {
		const posts = this.props.posts.map(post => {
			return post ? (
				<div key={post.id} className="item">
					<i className="large middle aligned icon user" />
					<div className="content">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			) : (
				<div>Loading...</div>
			);
		});

		return <div className="ui relaxed divided list">{posts}</div>;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPostandUsers }
)(PostList);
