import { useLists } from '@/stores/lists-store';
import { Card } from '@/types';
import { faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButtonFollow {
  card: Card;
}

export const ButtonFollow = ({ card }: IButtonFollow) => {
  const { handleUpdateCard } = useLists();

  const handleFollow = () => {
    handleUpdateCard({ ...card, followed: !card.followed });
  };

  return (
    <button
      onClick={handleFollow}
      className="flex w-full pl-3 py-px pr-1 items-center bg-light-gray rounded"
    >
      <FontAwesomeIcon icon={faEye} className="w-4 pr-2" />
      <div>Suivre</div>
      {card.followed && (
        <div className="w-6 h-6 ml-auto bg-check-icon-color rounded ">
          <FontAwesomeIcon
            icon={faCheck}
            // color="white"
            className="w-[18px] text-white"
          />
        </div>
      )}
    </button>
  );
};
