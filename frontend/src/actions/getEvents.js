import * as types from '../constants/types';

export default function getEvents() {
	return (dispatch, getState) => {
		///get address state
		// const { address } = getState();
		///in real, I think we fetch upcomming events with parameter address(city, country).
		///but in this test, I don't use address state.
		fetch(`events.json`).then((response) => response.json()).then((data) => {
			dispatch({
				type: types.CHANGE_EVENTS,
				payload: data.result
			});
		});
	};
}
