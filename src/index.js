import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import VideoGrid from './components/video_grid.js';
import { fetchVideos } from './functions/searchApi.js';
import { PacmanLoader } from 'react-spinners';

const API_KEY = 'AIzaSyAeE-Lg0cs2_SEcDwppbxvOeOg0vm0Y3-o';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            viewed: [],
            loading: true,
            size: 60,
            fullScreen: false,


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




    componentDidMount() {


        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);

    }

    toggle() {
        this.setState({
            fullScreen: !this.state.fullScreen
        });
    }


    render() {
        const videoSearch = _.debounce((term, maxResults) => {
            this.videoSearch(term, maxResults)
        }, 300);

        let content = {
            display: this.state.loading ? "none" : "block"
        };

        let loader = {
            display: this.state.loading ? "block" : "none"
        };


        return (

            <div>

                <div style={loader} className='sweet-loading'>
                    <PacmanLoader
                        color={'white'}
                        loading={this.state.loading}
                    />
                </div>

                <div style={content}>
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

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

