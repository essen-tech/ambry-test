/*
  Replace all occurences of the passed url to empty string
*/
module.exports.stripBaseUrl = function ({ entities, baseUrl, protocol }) {
  return JSON.parse(
    JSON.stringify(entities).replace(new RegExp(`${protocol}://${baseUrl}`, "g"), "")
  );
};
