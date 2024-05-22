import { Button } from '@/components/ui/button';
import { useLists } from '@/stores/lists-store';
import { Card } from '@/types';
import { Check, Eye } from 'lucide-react';

interface IButtonFollow {
  card: Card;
}

export const ButtonFollow: React.FC<IButtonFollow> = ({ card }) => {
  const { handleUpdateCard } = useLists();

  const handleFollow = () => {
    handleUpdateCard({ ...card, followed: !card.followed });
  };

  return (
    <Button
      variant="transparent-hover-dark"
      size="full"
      className="text-c-grey-4 space-x-2 px-2"
      onClick={handleFollow}
    >
      <Eye className="min-w-4 max-w-4 min-h-4 max-h-4" />
      <div className="w-full flex justify-start">Suivre</div>
      {card.followed && (
        <div className="w-6 h-6 bg-check-icon-color rounded text-white">
          <Check />
        </div>
      )}
    </Button>
  );
};
