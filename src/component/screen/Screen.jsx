import React, { useEffect, useState } from 'react';
import { FetchDataApi } from '../api/FetchDataApi';
import './style.css';
import FilterbyPlatfrom from '../filter/FilterbyPlatfrom';
import FetchDataByInput from '../input/FetchDataByInput';

const Screen = ({ props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [filteredData, setFilteredData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
       
          const response = await FetchDataApi();
          setData(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      if (selectedPlatform) {
        setFilteredData(data?.filter((game) =>
          game.platform.toLowerCase().includes(selectedPlatform.toLowerCase())
        ));
      } else {
        setFilteredData(data);
      }
    };

    filterData();
  }, [data, selectedPlatform]);

  useEffect(() => {
    const filterData = () => {
      if (props) {
        setFilteredData(data?.filter((game) =>
          game.genre.toLowerCase().includes(props.toLowerCase())
        ));
      } else {
        setFilteredData(data);
      }
    };

    filterData();
  }, [ props]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='main-container'>
        <FilterbyPlatfrom onPlatformChange={setSelectedPlatform}  />
        
        <div className='game-container'>
          {filteredData?.map((game) => (
            <div className='game-card' key={game.id}>
              <div>
                <img src={game.thumbnail} alt='' />
              </div>
              <div className='info'>
                <h3 style={{ textAlign: 'center' }}>{game.title}</h3>
                <p>{game.short_description}</p>
                <div className='genre-plat'>
                  <p className='genre'>{game.genre}</p>
                  <p className='platform'>{game.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;
