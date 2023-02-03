export const selectFields = ({ id, by, url, time, title, score } = {}) => {
  if (!url) url = "https://news.ycombinator.com";
  return { id, by, url, time, title, score };
};
