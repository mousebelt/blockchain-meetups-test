import React, { Component } from 'react';
import { EventItem } from '../../components';
import ReactPaginate from 'react-paginate';
import './styles.css';
// import $ from 'jquery';

class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'http://localhost:4000/events/upcoming',
			offset: 0,
			perPage: 4,
			pageCount: 4,
			items: []
		};
		//bind
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	componentDidMount() {
		this.getItems();
	}
	handlePageClick(data) {
		alert(data.selected);
		let selected = data.selected;
		let offset = selected * this.state.perPage;
		console.log(offset);
		this.setState({ offset: offset }, () => {
			this.getItems();
		});
	}

	// convertBlobToString(desc) {
	// 	console.log(desc);
	// 	const blb = new Blob(desc.data, { type: 'text/plain' });
	// 	const reader = new FileReader();

	// 	// This fires after the blob has been read/loaded.
	// 	reader.addEventListener('loadend', (e) => {
	// 		const text = e.srcElement.result;
	// 		console.log(text);
	// 	});

	// 	// Start reading the blob as text.
	// 	reader.readAsText(blb);
	// 	return 'asdf';
	// }

	// getItems() {
	// 	$.ajax({
	// 		url: this.state.url,
	// 		data: { limit: this.state.perPage, offset: this.state.offset },
	// 		dataType: 'json',
	// 		type: 'GET',

	// 		success: (data) => {
	// 			console.log(data);
	// 			this.setState({
	// 				items: data.result,
	// 				pageCount: data.\
	// 			});
	// 		},

	// 		error: (xhr, status, err) => {
	// 			console.error(this.props.url, status, err.toString()); // eslint-disable-line
	// 		}
	// 	});
	// }
	getItems() {
		fetch('events.json').then((response) => response.json()).then((data) => {
			console.log(data);
			this.setState({ items: data.result, pageCount: this.state.pageCount });
		});
	}

	render() {
		return (
			<div className="event-container">
				<div className="event-container-list">
					{this.state.items.map((item) => {
						return (
							// <EventItem
							// 	key={item.id}
							// 	id={item.id}
							// 	image="images/event-image1.png"
							// 	attending={item.attending}
							// 	title={item.name}
							// 	titleDesc={this.convertBlobToString(item.description)}
							// 	content={item.name}
							// 	name={item.name}
							// 	url={item.url}
							// />
							<EventItem
								key={item.id}
								id={item.id}
								image={item.image}
								attending={item.attending}
								title={item.name}
								titleDesc={item.titleDesc}
								content={item.content}
								name={item.name}
							/>
						);
					})}
				</div>
				<div className="event-container-pagination">
					<ReactPaginate
						previousLabel={'<'}
						nextLabel={'>'}
						breakLabel={'...'}
						breakClassName={'break-me'}
						pageCount={this.state.pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={4}
						onPageChange={this.handlePageClick}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
					/>
				</div>
			</div>
		);
	}
}

export default EventList;
