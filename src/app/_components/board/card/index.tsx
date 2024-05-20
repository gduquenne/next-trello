'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye } from '@fortawesome/free-solid-svg-icons';
import { Card as TCard } from '@/types';
import { useCardModal } from '@/hooks/use-card-modal';

interface CardProps {
  card: TCard;
}

export const Card = ({ card }: CardProps) => {
  const cardModal = useCardModal();

  return (
    <div key={card.id} className="card">
      <button
        className="card-button"
        onClick={() => cardModal.setOpen(card.id, card.listId)}
      >
        <h2 className="card-button-title">{card.title}</h2>
        <div className="card-button-icons-row">
          {card.followed && (
            <FontAwesomeIcon
              icon={faEye}
              color="rgb(49, 49, 49)"
              className="followed-icon"
            />
          )}
          {card.description && (
            <FontAwesomeIcon
              icon={faBars}
              color="rgb(49, 49, 49)"
              className="description-icon"
            />
          )}
        </div>
      </button>
    </div>
  );
};
