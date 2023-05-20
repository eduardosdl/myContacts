import { useCallback, useEffect, useState } from 'react';

export default function useSafeAsyncState(initState) {
  const [state, setState] = useState(initState);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  });

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted.current) {
      setState(data);
    }
  });

  return [state, setSafeAsyncState];
}
