import axios from 'axios';
const KEY = 'AIzaSyApdhK1KI9BfvOoBoAJlsb5c1M0VmhNqbQ';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY        
    }
    
})