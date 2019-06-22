import { renderHook, act } from '@testing-library/react-hooks';
import useSearchParams from './use-search-params';

describe('useSearchParams', () => {
  it('should use URLSearchParams', () => {
    const { result } = renderHook(() => useSearchParams());
    const [queryString, methods] = result.current;

    act(() => {
      expect(queryString).toBe('q=foo&r=bar');

      Object.keys(methods).forEach(key => {
        expect(typeof methods[key]).toBe('function');
      });
    });
  });

  it('should append search param', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      methods.append('s', 'baz');
    });

    const queryString = result.current[0];
    expect(queryString).toBe('q=foo&r=bar&s=baz');
  });

  it('should set search param', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      methods.set('q', 'bam');
    });

    const queryString = result.current[0];
    expect(queryString).toBe('q=bam&r=bar');
  });

  it('should sort search params', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      methods.append('a', 'bam');
      methods.sort();
    });

    const queryString = result.current[0];
    expect(queryString).toBe('a=bam&q=foo&r=bar');
  });

  it('should remove search param', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      methods.remove('q');
    });

    const queryString = result.current[0];
    expect(queryString).toBe('r=bar');
  });

  it('should check if search param has key', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      expect(methods.has('q')).toBe(true);
    });
  });

  it('should get search param value', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      expect(methods.get('q')).toBe('foo');
    });
  });

  it('should getAll search params values', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      methods.append('q', 'foo2');
      expect(methods.getAll('q')).toEqual(['foo', 'foo2']);
    });
  });

  it('should return entries', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      expect(methods.entries()).toEqual([['q', 'foo'], ['r', 'bar']]);
    });
  });

  it('should return keys', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      expect(methods.keys()).toEqual(['q', 'r']);
    });
  });

  it('should return values', () => {
    const { result } = renderHook(() => useSearchParams());
    const methods = result.current[1];

    act(() => {
      expect(methods.values()).toEqual(['foo', 'bar']);
    });
  });
});
