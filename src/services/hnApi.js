import axios from "axios";
import { selectFields } from "../utils/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const searchUrl = `http://hn.algolia.com/api/v1/search`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));
  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};

export const searchDefault = async (query, type, sort, time, page) => {
  console.log(`${type} ${sort}`);

  let url = searchUrl;

  if (sort === "date") url += "_by_date";

  url += `?query=${query}`;

  if (type === "stories") url += "&tags=story";
  else if (type === "comments") url += "&tags=comment";

  if (time !== "allTime") {
    let currTime = Math.round(new Date().getTime() / 1000);
    console.log(currTime);
    url += "&numericFilters=created_at_i>";
    switch (time) {
      case "day":
        url += `${currTime - 86400}`;
        break;
      case "week":
        url += `${currTime - 604800},created_at_i<${currTime - 86400}`;
        break;
      case "month":
        url += `${currTime - 2628288},created_at_i<${currTime - 604800}`;
        break;
      default:
        url += `${currTime - 31539456},created_at_i<${currTime - 2628288}`;
        break;
    }
  }

  const response = await axios
    .get(`${url}&page=${page - 1}`)
    .then(({ data }) => data);

  let result = response.hits;
  if (!result.length) result = "none";
  return result;
};
