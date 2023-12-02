import axios from "axios";



   const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const getGames = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '52e7494806msh37e22e3c4ea28fap15de92jsn88d691c0bab2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    export const  FetchDataApi = async()=>{
        try {
            const response = await axios.get(url, getGames);
               return response;
          
          
          } catch (error) {
            console.error(error);
          }

    }
  
   