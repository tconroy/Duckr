





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


// Like Count
{
	type: FETCHING_COUNT,
}

{
	type: FETCHING_COUNT_ERROR,
	error: 'Error fetching duck\'s Like Count.',
}

{
	type: FETCHING_COUNT_SUCCESS,
	duckId,
	count,
}




// Users Likes
{
	type: FETCHING_LIKES,
}

{
	type: FETCHING_LIKES_ERROR,
	error: 'Error Fetching Likes',
}

{
	type: FETCHING_LIKES_SUCCESS,
	likes,
}

{
	type: ADD_LIKE,
	duckId,
}

{
	type: REMOVE_LIKE,
	duckId,
}
