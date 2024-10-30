/**
 * Split last word from string.
 * @param  {string} string   [The string to split.]
 * @return {Object} {words, lastWord}  [An object containing the lastWord and the rest of the string.]
 */
export const splitLastWordFromString = (string) => {
  let words = string.split(" ");
  let lastWord = words && words.pop();
  words = words.join(" ");
  return { words, lastWord };
};

/**
 * Split first word from string.
 * @param  {string} string   [The string to split.]
 * @return {Object} {firstWord, words}  [An object containing the firstWord and the rest of the string.]
 */
export const splitFirstWordFromString = (string) => {
  let words = string.split(" ");
  let firstWord = "";
  if (words.length > 1) {
    firstWord = words && words[0] + " ";
    words = words.slice(1).join(" ");
  }
  return { firstWord, words };
};

/**
 * Truncate the input string to be a maximum number of characters long. Does not split in the middle words.
 * @param  {string} string      [The string to be truncated.]
 * @param  {number} length      [The number of chars to allow before truncation begins.]
 * @param  {boolean} setSuffix  [Optional parameter. Whether or not to set ellipses at the end of the truncated string. Defaults to true.]
 * @return {string}             [A truncated version of the input string if the length of the input was longer than the second parameter.]
 */
export const truncate = (string, length, setSuffix = true) => {
  if (!string) {
    return "";
  } else if (string.length > length) {
    return setSuffix
      ? string.substring(0, string.lastIndexOf(" ", length)) + " ..."
      : string.substring(0, length);
  } else {
    return string;
  }
};

/**
 * Copy the input string to clipboard.
 * @param  {string} text   [The string to be copied to clipboard.]
 */
export const copyToClipboard = (text: string) => {
  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute(
        "style",
        "position: absolute; pointer-events: none; opacity: 0"
      );
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("Copy");
      textarea.remove();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * Strip html from string.
 * @param  {string} string   [The string without html tags.]
 */
export const stripHtmlFromString = (string: string) => {
  return string.replace(/(<([^>]+)>\n*)/gi, "");
};
