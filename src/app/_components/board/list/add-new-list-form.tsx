'use client';

import { createList } from '@/actions/create-list';
import { useAction } from '@/hooks/use-action';
import { useListsContext } from '@/hooks/use-list-context';
import { handleKeyDown } from '@/lib/form-utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export const AddNewListForm = () => {
  const ref = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState('');

  const { handleAddList } = useListsContext();

  const { execute } = useAction(createList, {
    onSuccess: data => {
      handleAddList(data);
      setIsFormVisible(false);
      setTitle('');
    },
    onError: error => console.log(error)
  });

  useOnClickOutside(ref, () => setIsFormVisible(false));

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (title.trim().length === 0) {
      return;
    }

    execute({ title });
  };

  return (
    <form
      ref={ref}
      className={
        isFormVisible ? 'new-list-form-opened' : 'new-list-form-closed'
      }
      onSubmit={handleSubmit}
    >
      {isFormVisible ? (
        <div>
          <input
            type="text"
            className="new-list-form-input"
            placeholder="Saisissez un titre pour cette carte..."
            value={title}
            onKeyDown={e => handleKeyDown(e, handleSubmit)}
            onChange={e => setTitle(e.target.value)}
          />
          <div className="add-new-card-form-validation-buttons-container">
            <button className="add-new-card-form-button-save" type="submit">
              Ajouter une liste
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
          className="new-list-button"
          onClick={() => setIsFormVisible(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="new-list-button-icon" />
          Ajouter une autre liste
        </button>
      )}
    </form>
  );
};
