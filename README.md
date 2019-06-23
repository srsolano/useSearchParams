# useSearchParams

React Hook to use the URLSearchParams utility methods.

[![version](https://img.shields.io/npm/v/use-search-params.svg)](https://www.npmjs.com/package/use-search-params)
[![minified size](https://img.shields.io/bundlephobia/min/use-search-params.svg)](https://www.npmjs.com/package/use-search-params)
[![downloads](https://img.shields.io/npm/dt/use-search-params.svg)](https://www.npmjs.com/package/use-search-params)
[![build](https://travis-ci.com/srsolano/useSearchParams.svg)](https://travis-ci.com/srsolano/useSearchParams)

## Install

### npm

```bash
npm install use-search-params --save
```

### yarn

```bash
yarn add use-search-params
```

## Usage

The hook returns the current url query string value together with the URLSearchParams methods to manipulate it.

```JavaScript
import useSearchParams from 'use-search-params';

const MyComponent = () => {
  const [
    queryString,
    { append, entries, get, getAll, has, keys, remove, set, sort, values }
  ] = useSearchParams();

  const entries = entries();
  const keys = keys();
  const values = values();
  const value = get('key');
  const allValues = getAll('key');
  const hasKey = has('key');

  return (
    <div>
      <p>Query string: {queryString}</p>
      <button onClick={() => append('key', 'value')}>
        Append
      </button>
      <button onClick={() => remove('key')}>Remove</button>
      <button onClick={() => set('key', 'value')}>Set</button>
      <button onClick={() => sort()}>Sort</button>
      <button
        onClick={() => {
          window.location.search = queryString;
        }}
      >
        Set new location with generated queryString
      </button>
    </div>
  );
}
```

## Learn more

This hook uses the [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) api

## License

MIT
