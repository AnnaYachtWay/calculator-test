export const getLastWord = (value: string) => {
  const words = value.trim().split(' ');

  const isSplit = words.length > 1;

  return {
    isSplit,
    // string without last word
    splitValue: isSplit ? words.slice(0, -1).join(' ') : value,
    lastWord: words[words.length - 1],
  };
};

export const getNumberFromString = (value: string) => {
  if (typeof value !== 'string') return 0;

  return parseFloat(value.replace(/[^\d.]*/g, '')) || 0;
};

export const toKebabCase = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
