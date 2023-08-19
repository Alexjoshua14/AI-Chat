
import { RefObject, useEffect } from 'react';

/**
 * Automatically scrolls to the bottom of the container 
 * on first render and upon container changes.
 * 
 * @param containerRef - The container to scroll to the bottom of.
 */
export const useAutoScrollBottom = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      const height = containerRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      containerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }, [containerRef])
}