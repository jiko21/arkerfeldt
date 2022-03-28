import { useBoolean } from '@/hooks/useBoolean';
import { RefObject, useCallback, useEffect } from 'react';

export const usePanel = (ref: RefObject<HTMLElement>) => {
  const { isOpen, open, close, toggle } = useBoolean();

  const handleCloseOutsideModal = useCallback((event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      close();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleCloseOutsideModal);
    return () => {
      document.removeEventListener('click', handleCloseOutsideModal);
    };
  }, []);

  return {
    isOpen, open, close, toggle
  };
};
