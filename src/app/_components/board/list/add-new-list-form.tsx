'use client';

import { v4 as uuidv4 } from 'uuid';
import { handleEnterKeyDown } from '@/lib/form-utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useLists } from '@/stores/lists-store';

export const AddNewListForm = () => {
  const ref = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const { handleAddList } = useLists();

  useOnClickOutside(ref, () => setIsFormVisible(false));

  const handleSubmit = () => {
    if (title.trim().length === 0) {
      return;
    }

    handleAddList({ title, id: uuidv4() });
    setIsFormVisible(false);
    setTitle('');
  };

  return (
    <form
      ref={ref}
      className={
        isFormVisible ? 'new-list-form-opened' : 'new-list-form-closed'
      }
      action={handleSubmit}
    >
      {isFormVisible ? (
        <div>
          <input
            type="text"
            className="new-list-form-input"
            placeholder="Saisissez un titre pour cette carte..."
            value={title}
            onKeyDown={e => handleEnterKeyDown(e, handleSubmit)}
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
