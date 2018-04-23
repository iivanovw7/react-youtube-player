import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import VideoGrid from './components/video_grid.js';
import { fetchVideos } from './functions/searchApi.js';

const API_KEY = 'AIzaSyAeE-Lg0cs2_SEcDwppbxvOeOg0vm0Y3-o';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            maxResults: 12,


        };

        this.videoSearch('surfboards');
        console.log(this.props.maxResults);

    }

    videoSearch(term) {

        /*

        fetchVideos({key: API_KEY, term: term, resultsPerPage: 10}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

            // ES5 = this.setState({ videos: videos });
            console.log(videos);
        });

         */

        fetchVideos({key: API_KEY, term: term, maxResults: this.state.maxResults}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

            // ES5 = this.setState({ videos: videos });
            console.log(videos);
        });



    }

    onInputChange(value) {
        this.setState ({maxResults: value})
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);


        return (
            <div>
                <VideoGrid
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
                <SearchBar onSearchTermChange={videoSearch}/>
                <div>
                    <input
                        value={this.state.maxResults}
                        onChange={event => this.onInputChange(event.target.value)}/>
                    <div>
                        Value of the input: {this.state.maxResults}
                    </div>
                </div>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
                <div className="container__row">
                    <div className="row-element">Row Element</div>
                    <div className="row-element">Row Element</div>
                    <div className="row-element">Row Element</div>
                    <div className="row-element">Row Element</div>
                    <div className="row-element">Row Element</div>
                    <div className="row-element">Row Element</div>
                    <div className="row-element">Row Element</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));