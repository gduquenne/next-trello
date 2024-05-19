'use server';

import { revalidatePath } from 'next/cache';

import { createSafeAction } from '@/lib/create-safe-action';

import { UpdateCard } from './schema';
import { InputType, ReturnType } from './types';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { id, listId, title, description, followed } = data;
  let card;

  try {
    card = {
      id,
      listId,
      title: title ?? '',
      description,
      followed
    };
  } catch (error) {
    return {
      error: 'Failed to update.'
    };
  }

  revalidatePath(`/`);
  return { data: card };
};

export const updateCard = createSafeAction(UpdateCard, handler);
