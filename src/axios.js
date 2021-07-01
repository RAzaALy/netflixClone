import axios from 'axios';

//base url to make a request to movid DB:

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
//it works like this:
// instance.get('/demo');
// output : https://api.themoviedb.org/3/demo

export default instance;