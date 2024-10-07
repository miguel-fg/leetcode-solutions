/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

*/

const stringEncode = (strs) => {
  let res = '';

  for (let i = 0; i < strs.length; i++) {
    res += strs[i].length + '_' + strs[i];
  }

  return res;
};

const stringDecode = (str) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < str.length) {
    while (str.charAt(j) !== '_') {
      j++;
    }

    let strLen = parseInt(str.substring(i, j));

    i = j + 1; // first letter
    j = i + strLen; // next number first digit

    res.push(str.substring(i, j));
    i = j;
  }

  return res;
};

export { stringEncode, stringDecode };
