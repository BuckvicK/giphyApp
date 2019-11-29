import { buildQueryParams } from "./index";
import { API_RANDOM, API_SEARCH, API_TREND } from "../constants/apiPath";

const LIMIT_GIF = 10;

const getSearchGif	= (q, offset = 0, limit = LIMIT_GIF) =>
	fetch(`${buildQueryParams(
		API_SEARCH,
		{
			q,
			offset,
			limit,
		}
	)}`).then(res => res.json());

const getTrendGif	= (offset = 0, limit = LIMIT_GIF) =>
	fetch(`${buildQueryParams(
		API_TREND,
		{
			offset,
			limit,
		}
	)}`).then(res => res.json());

const getRandomGif	= () => fetch(API_RANDOM).then(res => res.json());

export {
	getSearchGif,
	getTrendGif,
	getRandomGif,
}
