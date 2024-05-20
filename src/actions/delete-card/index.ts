'use server';

import { revalidatePath } from 'next/cache';

import { createSafeAction } from '@/lib/create-safe-action';

import { DeleteCard } from './schema';
import { InputType, ReturnType } from './types';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { id, listId } = data;
  let card;

  try {
    card = {
      id,
      listId,
      title: ''
    };
  } catch (error) {
    return {
      error: 'Failed to delete.'
    };
  }

  revalidatePath(`/`);
  return { data: id };
};

export const deleteCard = createSafeAction(DeleteCard, handler);
