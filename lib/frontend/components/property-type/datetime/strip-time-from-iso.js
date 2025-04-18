export const stripTimeFromISO = date => {
  if (date === null) return null;
  if (typeof date === 'string') {
    return date.replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, '');
  }
  return date.toISOString().replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, '');
};