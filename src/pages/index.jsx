import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchCard from '../components/Molecules/SearchCard/SearchCard';
import WeatherCard from '../components/Molecules/weatherCard';
import getWeather from '../Networking/getWeather';
import { updateSearchData } from '../Redux/user/userSearchSlice';
import styles from './app.module.css';

const Home = () => {
  return <App searchedCityLi />;
};

const App = () => {
  const weatherdata = useSelector((state) => state.userData.weatherData) || [];
  let weatherdataArr = Object.values(weatherdata);
  return (
    <div className={styles.app}>
      <SearchCard />
      {weatherdataArr?.map((item) => {
        return <WeatherCard key={item.location.name} data={item} />;
      })}
    </div>
  );
};

export default Home;
