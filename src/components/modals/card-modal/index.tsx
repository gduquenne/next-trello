'use client';

import { useCardModal } from '@/hooks/use-card-modal';
import { useLists } from '@/stores/lists-store';
import { handleEnterKeyDown } from '@/lib/form-utils';
import { Card, ListWithCards } from '@/types';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextareaAutosize
} from '@mui/material';
import { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';

export const CardModal = () => {
  const cardId = useCardModal(state => state.cardId);
  const listId = useCardModal(state => state.listId);
  const open = useCardModal(state => state.open);
  const isEditing = useCardModal(state => state.isEditing);
  const setClose = useCardModal(state => state.setClose);
  const setIsEditing = useCardModal(state => state.setIsEditing);

  const { lists, handleUpdateCard } = useLists();

  const [card, setCard] = useState<Card | undefined>();
  const [list, setList] = useState<ListWithCards | undefined>();
  const [description, setDescription] = useState<Card['description']>();

  useEffect(() => {
    if (listId === undefined || cardId === undefined) return;
    const foundList = lists.find(list => list.id === listId)!;
    setList(cloneDeep(foundList));
    const foundCard = foundList.cards.find(card => card.id === cardId)!;
    setCard(foundCard);
    setDescription(foundCard.description);
  }, [lists, cardId, listId]);

  const handleSaveDesc = () => {
    setIsEditing(false);
    handleUpdateCard({ ...card!, description });
  };

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
            {isEditing ? (
              <>
                <TextareaAutosize
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  onKeyDown={e => handleEnterKeyDown(e, handleSaveDesc)}
                  placeholder="Ajouter une description plus détaillée..."
                  className="w-full p-3 border-1 rounded border-text-area-border-color"
                  minRows={2}
                />
                <div className="modal-card-description-form-footer">
                  <button
                    className="modal-card-description-form-button-save"
                    onClick={handleSaveDesc}
                  >
                    Enregistrer
                  </button>
                  <button
                    className="modal-card-description-form-button-close"
                    onClick={() => setIsEditing(false)}
                  >
                    <FontAwesomeIcon
                      color="rgb(49, 49, 49)"
                      icon={faXmark}
                      className="modal-card-description-form-button-close-icon"
                    />
                  </button>
                </div>
              </>
            ) : (
              <div
                className="hover:cursor-pointer hover:bg-gray-300"
                onClick={() => setIsEditing(true)}
              >
                {description?.length
                  ? description
                  : 'Ajouter une description plus détaillée...'}
              </div>
            )}
          </div>
          <div className="pl-5" style={{ minWidth: 190 }}>
            <div className="modal-card-body-title">Actions</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
