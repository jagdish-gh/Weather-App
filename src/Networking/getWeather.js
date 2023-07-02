const { default: HttpClient } = require('../Networking/HttpClient');

const baseUrl = 'http://api.weatherapi.com/v1';
const getWeather = async (city) => {
  const apiRoute = '/current.json';
  try {
    const res = await HttpClient({
      apiRoute,
      q: `q=${city}`,
      method: 'GET',
    });
    return res;
  } catch (e) {
    throw new Error(e);
  }

  return res;
};

export default getWeather;
