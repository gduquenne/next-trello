import { KeyboardEvent } from 'react';

export const handleEnterKeyDown = (
  e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  handleSubmit: () => void
) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    handleSubmit();
  }
};
