export const exerciseOptions = {
    method: 'GET',
    headers: {
    'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };