import { buildQueryParams } from "../../utils";

const API_KEY = 'aCYx8eJP8FQAqLZHjjxu1PPyFz0kNMqO';
const API_GIF_ID = '3o7WIydEMfY4J8q8Ew';
const LIMIT_GIF = 10;

const API_SEARCH = 'https://api.giphy.com/v1/gifs/search';
const API_REQUEST_SEARCH_GIF = `${API_SEARCH}?api_key=${API_KEY}&`;
const getSearchGif	= (query, offset = 0, limit = LIMIT_GIF) =>
	fetch(`${API_REQUEST_SEARCH_GIF}${buildQueryParams(
		{
			q: query,
			offset,
			limit,
		}
	)}`).then(res => res.json());

const API_TREND = 'https://api.giphy.com/v1/gifs/trending';
const API_REQUEST_TRENDS_GIF = `${API_TREND}?api_key=${API_KEY}&`;
const getTrendGif	= (offset = 0, limit = LIMIT_GIF) =>
	fetch(`${API_REQUEST_TRENDS_GIF}${buildQueryParams(
		{
			offset,
			limit,
		}
	)}`).then(res => res.json());


const API_URL = 'https://api.giphy.com/v1/gifs/random';
const API_URL_GIF = 'https://api.giphy.com/v1/gifs';

const API_REQUEST = `${API_URL}?api_key=${API_KEY}&`;
const API_REQUEST_ID_GIF = `${API_URL_GIF}/${API_GIF_ID}?api_key=${API_KEY}&`;

const getRandomGif	= () => fetch(API_REQUEST).then(res => res.json());
const getIdGif		= () => fetch(API_REQUEST_ID_GIF).then(res => res.json());
