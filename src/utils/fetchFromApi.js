import axios from 'axios';

const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


//Axios  config
export const fetchFromApis = async (url) => {

    const { data } = await axios.get(`${baseUrl}/${url}`, options);


    console.log(data);

    return data;

}