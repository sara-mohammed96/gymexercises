export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': 'a36003b663msh36553b19c7a6676p1e67f6jsnc03f86670414',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };