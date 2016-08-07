// Duck Actions
{
	type: FETCHING_DUCK,
}

{
	type: FETCHING_DUCK_ERROR,
	error: 'error fetching duck',
}

{
	type: FETCHING_DUCK_SUCCESS,
	duck,
}

{
	type: REMOVE_FETCHING,
}

{
	type: ADD_DUCK,
	duck,
}

{
	type: ADD_MULTIPLE_DUCKS,
	ducks,
}


// Feed Actions
{
	type: SETTING_FEED_LISTENER
}

{
	type: SETTING_FEED_LISTENER_ERROR,
	error: 'Error Fetching Feeds.',
}

{
	type: SETTING_FEED_LISTENER_SUCCESS,
	duckIds,
}

{
	type: ADD_NEW_DUCK_ID_TO_FEED,
	duckId,
}

{
	type: RESET_NEW_DUCKS_AVAILABLE,
}


// Listener Actions
{
	type: ADD_LISTENER,
	listenerId,
}



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


// Users Ducks
{
	type: FETCHING_USERS_DUCKS,
	uid,
}

{
	type: FETCHING_USERS_DUCKS_ERROR,
	error: 'Error fetching Users Duck Ids',
}

{
	type: FETCHING_USERS_DUCKS_SUCCESS,
	uid,
	duckIds,
	lastUpdated,
}

{
	type: ADD_SINGLE_USERS_DUCK,
	uid,
	duckIds,
	lastUpdated,
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
