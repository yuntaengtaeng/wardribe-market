export const objectToQueryString = (obj) => {
  const query = Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

  return query;
};
