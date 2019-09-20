import axios from 'axios';

const KEY = 'AIzaSyDn5ctj72ovwsUj1wsU4JVWrKV9xJ1oh50';

export default axios.create({ //already have base URL!!!
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

// what it do in APP:
// youtube.get(https://www.googleapis.com/youtube/v3 + /search)