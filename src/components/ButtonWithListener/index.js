import { useEffect } from 'react';

export default function ButtonWithListener({
  onEvent,
}) {

  useEffect(() => {
    window.addEventListener(
      'myCustomEvent',
      onEvent
    );
    return () => window.removeEventListener(
      'myCustomEvent',
      onEvent
    );
  }, []);

  return (
    <button
      onClick={
        () => window.dispatchEvent(
          new Event('myCustomEvent')
        )
      }
    >
      Click Me
    </button>
  );
}
