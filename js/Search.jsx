import React, {Component} from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

/* react component Class is, they must have render methods,
and render method must return markup */


class Search extends Component {

	state = {
			searchTerm: ''
		};

		/* this.handleSearchTermChange = this.handleSearchTermChange.bind(this); */

	/* create method*/
	handleSearchTermChange = (event) => {
		this.setState({searchTerm: event.target.value});
	};

	render() {
		return (
			<div className = 'search'>
				<header>
					<h1>svideo</h1>
					<input onChange={this.handleSearchTermChange} 
							value={this.state.searchTerm} 
							type='text' 
							placeholder = "search" />
				</header>

				<div>
					{preload.shows
					.filter(show => `${show.title} ${show.description}`
						.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)

					.map( show => <ShowCard key={show.imdbID} show={show} />)}	
				</div>
			</div>
		);
	};
};
	
export default Search;

/* another way to send object is to use Object Spred {...show}
this will elinimate shoe and give you top level properties 
ex. {props.show.title} to => {props.title} / currently jsx specific.*/