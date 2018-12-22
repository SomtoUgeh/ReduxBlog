import jsonPlaceholders from "../api/jsonPlaceholders";
import _ from "lodash";

export const fetchPostandUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	const userIds = _.uniq(_.map(getState().posts, "userId"));
	userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholders.get("/posts");

	dispatch({
		type: "FETCH_POST",
		payload: response.data
	});
};

export const fetchUser = id => dispatch => {
	_fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholders.get(`/users/${id}`);

	dispatch({
		type: "FETCH_USER",
		payload: response.data
	});
});
