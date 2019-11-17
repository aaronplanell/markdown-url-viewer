// eslint-disable-next-line
const REGEX_URL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._–—~–:/?#[\]@!\$&%'\(\)\*\+,;=.]+$/g;

export const isValidUrl = path => REGEX_URL.test(path);
