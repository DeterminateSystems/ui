import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";

const delay = 1_000;

/**
 * A React hook that provides copy-to-clipboard functionality with temporary visual feedback.
 *
 * Returns a copy handler and a boolean indicating whether the data was recently copied.
 * The copied state automatically resets after 1 second.
 */
function useCopy(
  data: string,
): [(event?: SyntheticEvent<Element>) => void, boolean] {
  const [copied, setCopied] = useState(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(
    (event?: SyntheticEvent<Element>) => {
      event?.preventDefault();

      navigator.clipboard
        .writeText(data)
        .then(() => {
          setCopied(true);

          if (timeoutId.current !== null) {
            clearTimeout(timeoutId.current);
          }

          timeoutId.current = setTimeout(() => {
            setCopied(false);
            timeoutId.current = null;
          }, delay);
        })
        .catch((error) => {
          console.error("Couldn't write to clipboard", error);
        });
    },
    [data],
  );

  useEffect(() => {
    return () => {
      const id = timeoutId.current;
      if (id !== null) {
        clearTimeout(id);
      }
    };
  }, []);

  return [handleCopy, copied] as const;
}

export default useCopy;
