export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const newsOptions = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=fitness&pageNumber=1&pageSize=10&autoCorrect=true',
  headers: {
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  }
};

export const memeOptions = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	}
};

export const nyOptions = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Host': 'ny-times-news-titles-and-urls.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
	}
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data)

  return data;
};