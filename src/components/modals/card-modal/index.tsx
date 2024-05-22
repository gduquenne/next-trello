'use client';

import { useCardModal } from '@/hooks/use-card-modal';
import { useLists } from '@/stores/lists-store';
import { Card, ListWithCards } from '@/types';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { ButtonFollow } from './button-follow';
import { ButtonDelete } from './button-delete';
import { Eye, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardDescriptionForm } from './description-form';

export const CardModal: React.FC = () => {
  const { cardId, listId, open, setClose } = useCardModal(state => state);
  const { lists } = useLists();

  const [card, setCard] = useState<Card | undefined>();
  const [list, setList] = useState<ListWithCards | undefined>();

  useEffect(() => {
    if (listId === undefined || cardId === undefined) return;
    const foundList = lists.find(list => list.id === listId)!;
    setList(foundList);
    setCard(foundList.cards.find(card => card.id === cardId)!);
  }, [lists, cardId, listId]);

  if (!list || !card) return null;

  return (
    <Dialog
      open={open}
      onClose={setClose}
      fullWidth={true}
      maxWidth={'md'}
      PaperProps={{ style: { backgroundColor: 'rgb(244, 245, 247)' } }}
    >
      <DialogTitle sx={{ display: 'flex' }}>
        <div>
          <div className="text-xl font-semibold">{card.title}</div>
          <div className="flex items-center text-sm">
            Dans la liste&nbsp;
            <u>{list.title}</u>&nbsp;
            {card.followed && <Eye className="text-c-grey-3" size={16} />}
          </div>
        </div>
        <Button
          className="ml-auto"
          variant="transparent-hover-dark"
          size="icon"
          onClick={setClose}
        >
          <Plus className="rotate-45 text-c-grey-3" />
        </Button>
      </DialogTitle>
      <DialogContent>
        <div className="flex w-full mb-5">
          <div className="grow ">
            <div className="text-lg font-semibold mb-2">Description</div>
            <CardDescriptionForm card={card} />
          </div>
          <div className="pl-5 w-[190px]">
            <div className="text-lg font-semibold mb-2">Actions</div>
            <ButtonFollow card={card} />
            <ButtonDelete card={card} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
