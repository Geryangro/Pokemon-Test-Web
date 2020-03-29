import qs from "qs";

export const defaultParseOpts = options => {
  const defaultOpts = {
    comma: false
  };

  return { ...defaultOpts, ...options };
};

export const queryParse = (queryStr, options = {}) => {
  const opts = defaultParseOpts(options);
  return qs.parse(queryStr, opts);
};

export const defaultStringifyOpts = options => {
  const defaultOpts = {
    encode: false,
    addQueryPrefix: true,
    indices: false,
    arrayFormat: "comma",
    sort: "alphabeticalSort"
  };

  return { ...defaultOpts, ...options };
};

export const queryStringify = (queryParams, options = {}) => {
  const opts = defaultStringifyOpts(options);
  return qs.stringify(queryParams, opts);
};
