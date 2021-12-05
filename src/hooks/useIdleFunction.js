import { useCallback, useEffect, useState } from 'react';

/**
 *
 * @param {number} idleTimeout Timeout in SECONDS to wait until the function is called due to inactivity
 * @param {object} inactivityTrackers An object whose reference should change to indicate the hook that the component IS NOT inactive
 * @param {()=>void} func Function to execute after a certain timeout of inactivity has been reached
 */
const useIdleFunction = (idleTimeout, inactivityTrackers, func) => {
  const [idleTime, setIdleTime] = useState(0);

  const startInterval = useCallback(() => {
    return setInterval(() => setIdleTime((it) => it + 1), 1000);
  }, []);

  useEffect(() => {
    const intervalId = startInterval();
    return () => clearInterval(intervalId);
  }, [startInterval]);

  useEffect(() => {
    setIdleTime(0);
  }, [inactivityTrackers]);

  useEffect(() => {
    if (idleTime >= idleTimeout) {
      setIdleTime(0);
      func();
    }
  }, [idleTime, func, idleTimeout]);
};
export default useIdleFunction;
