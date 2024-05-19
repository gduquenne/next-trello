'use client';

import { createCard } from '@/actions/create-card';
import { useAction } from '@/hooks/use-action';
import { useListsContext } from '@/hooks/use-list-context';
import { handleKeyDown } from '@/lib/form-utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface AddNewCardFormProps {
  listId: string;
}

export const AddNewCardForm = ({ listId }: AddNewCardFormProps) => {
  const ref = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState('');

  const { handleAddCard } = useListsContext();

  const { execute } = useAction(createCard, {
    onSuccess: data => {
      handleAddCard(data);
      setIsFormVisible(false);
      setTitle('');
    },
    onError: error => console.log(error)
  });

  useOnClickOutside(ref, () => setIsFormVisible(false));

  const handleSubmit = (e?: React.FormEvent) => {
    console.log('handleSubmit', { e, title });
    if (e) {
      e.preventDefault();
    }
    if (title.trim().length === 0) {
      return;
    }

    execute({ listId, title });
  };

  return (
    <form ref={ref} className="add-new-card-form" onSubmit={handleSubmit}>
      {isFormVisible ? (
        <div>
          <textarea
            className="add-new-card-form-textarea"
            placeholder="Saisissez le titre de la liste..."
            value={title}
            onKeyDown={e => handleKeyDown(e, handleSubmit)}
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
