import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
  try {
    // console.log('!!! LISTA: ', sw, ne);
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': 'your api',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    console.log('DATA', data);
    return data;
  }

  catch (error) {
    console.log(error);
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    // const formattedLatLng = `${lat}, ${lng}`; // Combine lat and lng into a single string
    // console.log(formattedLatLng);
    const { data } = await axios.get('https://weatherapi-com.p.rapidapi.com/search.json', {
      params: {q: `${lat}, ${lng}`},
      headers: {
        'X-RapidAPI-Key': 'your api key',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    });
    console.log('WEATHER DATA: ', data)
    return data;
  }
  catch (error) {
    console.log(error)

  }
}
