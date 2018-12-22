import jsonPlaceholders from "../api/jsonPlaceholders";

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholders.get("/posts");

	dispatch({
		type: "FETCH_POST",
		payload: response.data
	});
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholders.get(`/users/${id}`);

	dispatch({
		type: "FETCH_USER",
		payload: response.data
	});
};
