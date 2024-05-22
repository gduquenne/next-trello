'use client';

import { ElementRef, KeyboardEventHandler, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormTextarea } from '@/components/forms/form-textarea';
import { FormSubmit } from '@/components/forms/form-submit';
import { useLists } from '@/stores/lists-store';
import { Card } from '@/types';

interface CardDescriptionFormProps {
  card: Card;
}

export const CardDescriptionForm: React.FC<CardDescriptionFormProps> = ({
  card
}) => {
  const formRef = useRef<ElementRef<'form'>>(null);
  const textareaRef = useRef<ElementRef<'textarea'>>(null);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { handleUpdateCard } = useLists(state => state);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      disableEditing();
    }
  };

  const handleTextAreakeyDown: KeyboardEventHandler<
    HTMLTextAreaElement
  > = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  const handleSubmit = (formData: FormData) => {
    const description = formData.get('description') as string;
    if (description.trim().length) {
      handleUpdateCard({ ...card, description });
    }
    setIsEditing(false);
  };

  useOnClickOutside(formRef, () => setIsEditing(false));
  useEventListener('keydown', onKeyDown);

  if (isEditing) {
    return (
      <form action={handleSubmit} ref={formRef} className="space-y-2">
        <FormTextarea
          id="description"
          className="w-full h-fit text-"
          placeholder="Ajouter une description plus détaillée..."
          defaultValue={card.description}
          errors={undefined}
          ref={textareaRef}
          onKeyDown={handleTextAreakeyDown}
        />
        <div className="flex items-center gap-x-2">
          <FormSubmit variant="secondary">Enregistrer</FormSubmit>
          <Button
            onClick={disableEditing}
            size="icon"
            variant="transparent-hover-dark"
          >
            <Plus className="rotate-45 text-c-grey-3" />
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div
      className="hover:cursor-pointer hover:bg-gray-300 bg-light-gray min-h-[50px] rounded p-3"
      role="button"
      onClick={enableEditing}
    >
      {card.description?.length
        ? card.description
        : 'Ajouter une description plus détaillée...'}
    </div>
  );
};
