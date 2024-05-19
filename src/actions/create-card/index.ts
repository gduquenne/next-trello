'use server';

import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';

import { createSafeAction } from '@/lib/create-safe-action';

import { CreateCard } from './schema';
import { InputType, ReturnType } from './types';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title, listId } = data;
  let card;

  try {
    card = {
      title,
      listId,
      id: uuidv4()
    };
  } catch (error) {
    return {
      error: 'Failed to create.'
    };
  }

  revalidatePath(`/`);
  return { data: card };
};

export const createCard = createSafeAction(CreateCard, handler);
