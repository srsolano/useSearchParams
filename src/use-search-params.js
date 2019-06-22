import { useState } from 'react';

const useSearchParams = () => {
  const [searchParams] = useState(new URLSearchParams(window.location.search));
  const [queryString, setQueryString] = useState(searchParams.toString());

  const append = (name, value) => {
    searchParams.append(name, value);
    setQueryString(searchParams.toString());
  };

  const entries = () => Array.from(searchParams.entries());

  const get = name => searchParams.get(name);

  const getAll = name => searchParams.getAll(name);

  const has = name => searchParams.has(name);

  const keys = () => Array.from(searchParams.keys());

  const remove = name => {
    searchParams.delete(name);
    setQueryString(searchParams.toString());
  };

  const set = (name, value) => {
    searchParams.set(name, value);
    setQueryString(searchParams.toString());
  };

  const sort = () => {
    searchParams.sort();
    setQueryString(searchParams.toString());
  };

  const values = () => Array.from(searchParams.values());

  return [
    queryString,
    { append, entries, get, getAll, has, keys, remove, set, sort, values }
  ];
};

export default useSearchParams;
