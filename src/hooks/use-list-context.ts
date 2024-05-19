import {
  ListsContext,
  ListsContextProvider
} from '@/components/providers/list-provider';
import { useContextWrapper } from './use-context-wrapper';

export const useListsContext = () =>
  useContextWrapper(ListsContext, {
    contextName: useListsContext.name,
    providerName: ListsContextProvider.name
  });
