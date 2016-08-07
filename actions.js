





// Replies Actions

{
	type: FETCHING_REPLIES,
}

{
	type: FETCHING_REPLIES_ERROR,
	error: 'Error Fetching Replies.',
}

{
	type: FETCHING_REPLIES_SUCCESS,
	replies,
	duckId,
	lastUpdated: Date.now()
}

{
	type: ADD_REPLY,
	duckId,
	reply,
}

{
	type: ADD_REPLY_ERROR,
	error: 'Error Adding reply',
}

{
	type: REMOVE_REPLY,
	replyId,
}







