import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function fetchVideos(options, callback) {
    if (!options.key) {
        throw new Error('Youtube Search expected key, received undefined');
    }

    let inputMaxResults = 1;

        if (inputMaxResults <= 0) {
            inputMaxResults = 1;
        } else if (inputMaxResults >= 50) {
            inputMaxResults= 50;
        } else {
            inputMaxResults = options.maxResults;
        }



    let params = {
        part: 'snippet',
        key: options.key,
        q: options.term,
        type: 'video',
        maxResults: inputMaxResults
    };


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



