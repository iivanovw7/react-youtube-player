import React, {Component} from 'react';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            term: '',
            maxResults: 24
        }


    }


    render() {
        return (
            <div>
                <div className="search-bar-wrapper">
                    <div>
                        <h2>Search:</h2>
                    </div>
                    <div className={"search-bar"}>
                            <input
                                value={this.state.term}
                                onChange={event => this.onInputChange(event.target.value)}/>
                    </div>
                    <div className={"search-limit"}>
                            <input
                                value={this.state.maxResults}
                                onChange={event => this.onLimitChange(event.target.value)}/>
                    </div>
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term, this.state.maxResults);
    }

    onLimitChange(value) {
        this.setState ({maxResults: value});
    }

}


export default SearchBar;

