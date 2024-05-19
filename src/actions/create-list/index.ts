'use server';

import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';

import { createSafeAction } from '@/lib/create-safe-action';

import { CreateList } from './schema';
import { InputType, ReturnType } from './types';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title } = data;
  let list;

  try {
    list = {
      title,
      id: uuidv4()
    };
  } catch (error) {
    return {
      error: 'Failed to create.'
    };
  }

  revalidatePath(`/`);
  return { data: list };
};

export const createList = createSafeAction(CreateList, handler);
