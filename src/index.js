import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
            viewed: []


        };

        this.videoSearch('indie rock', 24);


    }

    videoSearch(term, maxResults) {


        fetchVideos({key: API_KEY, term: term, maxResults: maxResults}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

            console.log(videos);
        });



    }





    render() {
        const videoSearch = _.debounce((term, maxResults) => {
            this.videoSearch(term, maxResults)
        }, 300);


        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <div className="row">
                    <div className="col-sm-8">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-sm-4">
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}/>
                    </div>
                </div>
                <VideoGrid
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>


            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

