import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getWeather from '../../../Networking/getWeather';
import {
  updateSearchData,
  updateWeatherData,
} from '../../../Redux/user/userSearchSlice';
import styles from './../weathercard.module.css';
import stylesSC from './searchCard.module.css';
const SearchCard = () => {
  const searchedCityList = useSelector((state) => state.userData.searchedCity);

  const [city, setCity] = React.useState('');
  const [error, setError] = React.useState();
  const dispatch = useDispatch();

  const makeApiCall = async (city) => {
    try {
      let weatherdata = await getWeather(city);
      dispatch(updateSearchData({ city }));
      dispatch(updateWeatherData({ city, weatherdata }));
      setError('');
    } catch (e) {
      setError(e.message);
    }
  };
  const onSearchClick = () => {
    makeApiCall(city);
  };
  const onCityClick = (cityName) => {
    makeApiCall(cityName);
  };
  return (
    <div className={`${styles.card} ${stylesSC.searchSection}`}>
      <div className={stylesSC.topSection}>
        <input onChange={(event) => setCity(event.target.value)} value={city} />
        <img
          src="https://img.icons8.com/search"
          alt=" search icon"
          onClick={onSearchClick}
        />
      </div>
      {error && <p className={stylesSC.error}>{error}</p>}
      <div className={stylesSC.bottomSection}>
        {searchedCityList.map((item) => {
          return (
            <li
              key={item}
              onClick={() => onCityClick(item)}
              className={stylesSC.cityName}
            >
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCard;
