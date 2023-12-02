import axios from 'axios';


export default async function FetchDataByInput(endpoint) {
   

    const url= 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
      method: 'GET',
      params: {
        category: `${endpoint}`
      },
      headers: {
        'X-RapidAPI-Key': 'a46243b4damsh46e8d9d2421b114p1b504djsn92e47f78afae',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.get(url,options);
        return response;
    } catch (error) {
        console.error(error);
    }
}
