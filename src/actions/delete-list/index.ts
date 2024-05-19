'use server';

import { revalidatePath } from 'next/cache';

import { createSafeAction } from '@/lib/create-safe-action';

import { DeleteList } from './schema';
import { InputType, ReturnType } from './types';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { id } = data;
  let list;

  try {
    list = {
      id,
      title: ''
    };
  } catch (error) {
    return {
      error: 'Failed to delete.'
    };
  }

  revalidatePath(`/`);
  return { data: list };
};

export const deleteList = createSafeAction(DeleteList, handler);
