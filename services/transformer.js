
export const computeFrequencies = (oldFreq, newTweet) => {
  const text = newTweet.text;
  const newFreq = Object.assign({}, oldFreq);
  const words = text.split(" ").filter(w => {
    return w.length > 3;
  });
  words.forEach(w => {
    newFreq[w] = newFreq[w] || 0;
    newFreq[w]++;
  });
  return newFreq;
};

export const sortTermFrequencies = termFrequencies => {
  return (
    termFrequencies &&
    Object.keys(termFrequencies)
      .map(key => {
        return [key, termFrequencies[key]];
      })
      .sort((a, b) => {
        return b[1] - a[1];
      })
  );
};
