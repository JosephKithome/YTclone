import axios from 'axios';

const baseUrl ='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'ba370b185emshf90f09df12ec9b3p13a4ecjsna0de6ed73323',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


//Axios  config


export  const fetchFromApis = async(url)=>{
    
    const {data} =await axios.get(`${baseUrl}/${url}`, options);

    return data;

}