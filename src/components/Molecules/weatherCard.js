import styles from './weathercard.module.css';
const WeatherCard = ({ data }) => {
  return (
    <div className={`${styles.card} ${styles.weatherCard}`}>
      <div className={styles.topSection}>
        <div>
          <img src={`https://${data.current.condition.icon.slice(2)}`} />
        </div>
        <div>
          <div>{`${data.location.name} ${data.location.region}, ${data.location.country}`}</div>
          <div>{('last updated : ', data.current.last_updated)}</div>
        </div>
      </div>
      <div className={styles.middleSection}>
        <p className={styles.temp_c}>{`${data.current.temp_c}`}&#8451;</p>
        <p>{`${data.current.condition.text}`}</p>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomSubSection}>
          <p>{`Visibility :  ${data.current.vis_km} KM`}</p>

          <p>{`Feel Like :  ${data.current.feelslike_c}`}&#8451;</p>
        </div>
        <div className={styles.bottomSubSection}>
          <p>{`Humidity :  ${data.current.humidity} %`}</p>
          <p>{`Wind :  ${data.current.wind_kph} Kph`}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
