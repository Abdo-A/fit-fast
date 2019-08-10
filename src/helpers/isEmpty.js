export const isValueEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const arrayHasEmptyValue = (arr) =>
  arr.some((item) => isValueEmpty(item));
