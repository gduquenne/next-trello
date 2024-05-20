'use client';

import { v4 as uuidv4 } from 'uuid';
import { handleEnterKeyDown } from '@/lib/form-utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useLists } from '@/stores/lists-store';

interface AddNewCardFormProps {
  listId: string;
}

export const AddNewCardForm = ({ listId }: AddNewCardFormProps) => {
  const ref = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const { handleAddCard } = useLists();

  useOnClickOutside(ref, () => setIsFormVisible(false));

  const handleSubmit = () => {
    if (title.trim().length === 0) {
      return;
    }

    handleAddCard({ listId, title, id: uuidv4() });
    setIsFormVisible(false);
    setTitle('');
  };

  return (
    <form ref={ref} className="add-new-card-form" action={handleSubmit}>
      {isFormVisible ? (
        <div>
          <textarea
            className="add-new-card-form-textarea"
            placeholder="Saisissez le titre de la liste..."
            value={title}
            onKeyDown={e => handleEnterKeyDown(e, handleSubmit)}
            onChange={e => setTitle(e.target.value)}
          />
          <div className="add-new-card-form-validation-buttons-container">
            <button className="add-new-card-form-button-save" type="submit">
              Ajouter une carte
            </button>
            <button
              className="add-new-card-form-button-cancel"
              onClick={() => setIsFormVisible(false)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                color="rgb(49, 49, 49)"
                className="add-new-card-form-button-cancel-icon"
              />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="add-new-card-form-button"
          onClick={() => setIsFormVisible(true)}
        >
          <FontAwesomeIcon
            icon={faPlus}
            color="rgb(49, 49, 49)"
            className="add-new-card-form-button-icon"
          />
          Ajouter une autre carte
        </button>
      )}
    </form>
  );
};
