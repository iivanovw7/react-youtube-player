import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function fetchVideos(options, callback) {
    if (!options.key) {
        throw new Error('Youtube Search expected key, received undefined');
    }

    let params = {
        part: 'snippet',
        key: options.key,
        q: options.term,
        type: 'video',
        maxResults: options.maxResults
    };

    if (options.maxResults <= 0) {
        params = {
            part: 'snippet',
            key: options.key,
            q: options.term,
            type: 'video',
            maxResults: 1
        };
    } else if (options.maxResults >= 50) {
        params = {
            part: 'snippet',
            key: options.key,
            q: options.term,
            type: 'video',
            maxResults: 50
        };
    }


    axios.get(ROOT_URL, {params: params})
        .then(function (response) {
            if (callback) {
                callback(response.data.items);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
};



