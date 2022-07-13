import React, { useState, useEffect, useCallback } from 'react';

const useLocalStorage = (key, initState = null) => {
  const [state, setState] = useState(() => {
    const exValue = localStorage.getItem(key);

    if (exValue) {
      return JSON.parse(exValue);
    }
    return initState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const storageWatcher = useCallback(
    (e) => {
      if (e.newValue) {
        // update ours if we
        setState((currState) => {
          const newDat = JSON.parse(e.newValue || `${initState}`);
          return newDat === state ? newDat : currState;
        });
      }
    },
    [initState, state]
  );

  // install the watcher
  useEffect(() => {
    window.addEventListener('storage', storageWatcher);
    // stop listening on remove
    return () => {
      window.removeEventListener('storage', storageWatcher);
    };
  }, [state, storageWatcher]);

  return [state, setState];
};

export default useLocalStorage;
