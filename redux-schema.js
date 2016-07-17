{

	users: {
		isAuthed,
		isFetching,
		error,
		authedId,
		[uid]: {
			lastUpdated,
			info: {
				name,
				uid,
				avatar,
			}
		}
	},

	modal: {
		duck,
		isOpen,
	},

	ducks: {
		isFetching,
		error,
		[duckId]: {
			lastUpdated,
			info: {
				avatar,
				duckId,
				name,
				text,
				timestamp,
				uid
			}
		}
	},

	usersDucks: {
		isFetching,
		error,
		[uid]: {
			lastUpdated,
			duckIds: [duckId,duckId,duckId]
		}
	},

	likeCount: {
		[duckId]: 0,
	},

	usersLikes: {
		[duckId]: true
	},

	replies: {
		isFetching,
		error,
		[duckId]: {
			replies: {
				lastUpdated,
				[replyId]: {
					info: {
						avatar,
						duckId,
						name,
						text,
						timestamp,
						uid
					}
				}
			}
		}
	},

	listeners: {
		[listenersId]: true
	},
	feed: {
		isFetching,
		error,
		newDucksAvailable,
		duckIdsToAdd: [duckId, duckId],
		duckIds: [duckId,duckId,duckId]
	}
}