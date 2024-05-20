'use server';

import { revalidatePath } from 'next/cache';

import { createSafeAction } from '@/lib/create-safe-action';

import { UpdateList } from './schema';
import { InputType, ReturnType } from './types';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title, id } = data;
  let list;

  try {
    list = {
      id,
      title
    };
  } catch (error) {
    return {
      error: 'Failed to update.'
    };
  }

  revalidatePath(`/`);
  return { data: list };
};

export const updateList = createSafeAction(UpdateList, handler);
