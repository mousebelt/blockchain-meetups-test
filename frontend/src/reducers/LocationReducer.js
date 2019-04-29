export default function LocationReducer(state = '', action) {
	// return Object.assign({}, state, { location: action.payload });

	if (action.type === 'CHANGE_LOCATION') {
		return action.payload;
	} else {
		return state;
	}
}
