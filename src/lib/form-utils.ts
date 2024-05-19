import { KeyboardEvent } from 'react';

export const handleKeyDown = (
  e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  handleSubmit: () => void
) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleSubmit();
  }
};
