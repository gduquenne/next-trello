'use client';

import { useCardModal } from '@/hooks/use-card-modal';
import { useLists } from '@/stores/lists-store';
import { Card, ListWithCards } from '@/types';
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { ButtonFollow } from './button-follow';
import { ButtonDelete } from './button-delete';
import { TextAreaDescription } from './textarea-description';

export const CardModal = () => {
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
      <DialogTitle>
        <div className="flex justify-between">
          <div>
            <div className="modal-card-title">{card.title}</div>
            <div className="modal-card-subtitle">
              Dans la liste&nbsp;
              <u>{list.title}</u>
              {card.followed && (
                <>
                  &nbsp;
                  <FontAwesomeIcon icon={faEye} />
                </>
              )}
            </div>
          </div>
          <button className="modal-card-button-close" onClick={setClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="flex w-full mb-5">
          <div className="grow">
            <div className="modal-card-body-title">Description</div>
            <TextAreaDescription card={card} />
          </div>
          <div className="pl-5 min-w-[190px]">
            <div className="modal-card-body-title">Actions</div>
            <ButtonFollow card={card} />
            <ButtonDelete card={card} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
