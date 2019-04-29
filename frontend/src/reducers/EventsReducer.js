export default function EventsReducer(state = [], action) {
	// return Object.assign({}, state, { location: action.payload });

	if (action.type === 'CHANGE_EVENTS') {
		return action.payload;
	} else {
		return state;
	}
}
