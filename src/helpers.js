export const isValidUrl = path => {
  // eslint-disable-next-line
  const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._–—~–:/?#[\]@!\$&%'\(\)\*\+,;=.]+$/g;
  return reg.test(path);
};
