import { useEffect, useMemo } from "react";

/**
 * Hook to create an [object
 * URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)
 * from a string. This hook takes care of cleaning up the generated object URL
 * during React's lifecycle operations.
 *
 * @param data The data to convert into a blob
 * @returns An object URL suitable for downloading (using `<a href={url}
 * download />` markup).
 */
function useObjectURL(data: string): string {
  const url = useMemo(() => {
    const blob = new Blob([data]);
    return URL.createObjectURL(blob);
  }, [data]);

  useEffect(() => URL.revokeObjectURL(url), [url]);

  return url;
}

export default useObjectURL;
