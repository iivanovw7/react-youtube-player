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
                    <div className={"search-input"}>
                            <span className={"input-separator"}> Video search:</span>
                            <input
                                placeholder="indie rock"
                                className={"search-input-field"}
                                value={this.state.term}
                                onChange={event => this.onInputChange(event.target.value)}/>
                            <span className={"input-separator"}> | Results limit:</span>
                            <input
                                placeholder="results limit"
                                className={"search-limit-field"}
                                value={this.state.maxResults}
                                onChange={event => this.onLimitChange(event.target.value)}/>
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

