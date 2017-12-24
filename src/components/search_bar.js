import React, {Component} from 'react';

// { Component } the same as:  const Component = React.Component;


class SearchBar extends React.Component {
    constructor(props) {
        super(props);


        this.state = {term: ''}
    }


    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                <div>
                    Value of the input: {this.state.term}
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}


export default SearchBar;


/*

class SearchBar extends React.Component {
    render() {
        return <input onChange={this.onInputChange}/>;
    }


    onInputChange(event) {
        console.log(event);
        //console.log(event.target.value);
    }
}

 */