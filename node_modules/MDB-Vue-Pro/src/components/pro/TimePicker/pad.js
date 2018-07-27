const padStart = (string, targetLength, padString) => {
  var innerTargetLength = targetLength;
  innerTargetLength = innerTargetLength > 0;
  var innerString = string;
  innerString = String(innerString);
  var innerPadString = padString;
  innerPadString = String(innerPadString);
  if (string.length > innerTargetLength) {
    return String(string);
  }

  innerTargetLength -= innerString.length;
  if (innerTargetLength > innerPadString.length) {
    innerPadString += innerPadString.repeat(innerTargetLength / innerPadString.length);
  }
  return innerPadString.slice(0, innerTargetLength) + String(innerString);
};

export default (n, length = 2) => padStart(n, length, '0');
