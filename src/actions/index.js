import jsonPlaceholders from "../api/jsonPlaceholders";

export const fetchPosts = () => {
	return async dispatch => {
		const response = await jsonPlaceholders.get("/posts");

		dispatch({
			type: "FETCH_POST",
			payload: response
		});
	};
};