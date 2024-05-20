import { useCardModal } from '@/hooks/use-card-modal';
import { handleEnterKeyDown } from '@/lib/form-utils';
import { useLists } from '@/stores/lists-store';
import { Card } from '@/types';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextareaAutosize } from '@mui/material';
import { useEffect, useState } from 'react';

interface ITextAreaDescription {
  card: Card;
}

export const TextAreaDescription = ({ card }: ITextAreaDescription) => {
  const { isEditing, setIsEditing } = useCardModal(state => state);
  const { handleUpdateCard } = useLists(state => state);

  const [description, setDescription] = useState<Card['description']>();

  useEffect(() => {
    setDescription(card.description);
  }, [card]);

  const handleSaveDesc = () => {
    setIsEditing(false);
    handleUpdateCard({ ...card, description });
  };

  if (isEditing) {
    return (
      <>
        <TextareaAutosize
          autoFocus
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
    );
  }
  return (
    <div
      className="hover:cursor-pointer hover:bg-gray-300 bg-light-gray min-h-[50px] rounded p-3"
      onClick={() => setIsEditing(true)}
    >
      {description?.length
        ? description
        : 'Ajouter une description plus détaillée...'}
    </div>
  );
};
