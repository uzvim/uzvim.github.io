const normalize = (str: string): string => {
  return str.trim().replace(/\s+/g, '-').toLowerCase();
};

export default normalize;
