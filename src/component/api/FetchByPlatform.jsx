import axios from 'axios';
import React from 'react'


const FetchByPlatform = async() => {
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        params: {platform: 'pc'},
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

export default FetchByPlatform
