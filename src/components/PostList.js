import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

export class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const posts = this.props.post.map(post => {
			return post ? (
				<div key={post.id} className="item">
					<i className="large middle aligned icon user" />
					<div className="content">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader user={post.id} />
				</div>
			) : (
				<div>Loading...</div>
			);
		});

		return <div className="ui relaxed divided list">{posts}</div>;
	}
}

const mapStateToProps = state => {
	return { post: state.post };
};

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostList);
