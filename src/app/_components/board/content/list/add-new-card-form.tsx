'use client';

import { v4 as uuidv4 } from 'uuid';
import React, {
  ElementRef,
  KeyboardEventHandler,
  useRef,
  useState
} from 'react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { useLists } from '@/stores/lists-store';
import { FormTextarea } from '@/components/forms/form-textarea';
import { FormSubmit } from '@/components/forms/form-submit';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface AddNewCardFormProps {
  listId: string;
}

export const AddNewCardForm: React.FC<AddNewCardFormProps> = ({ listId }) => {
  const formRef = useRef<ElementRef<'form'>>(null);
  const textareaRef = useRef<ElementRef<'textarea'>>(null);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { handleAddCard } = useLists();

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
    const title = formData.get('title') as string;
    if (title.trim().length) {
      handleAddCard({ listId, title, id: uuidv4() });
    }
    setIsEditing(false);
  };

  useOnClickOutside(formRef, () => setIsEditing(false));
  useEventListener('keydown', onKeyDown);

  if (isEditing) {
    return (
      <form action={handleSubmit} ref={formRef} className="space-y-2">
        <FormTextarea
          id="title"
          className="w-full"
          placeholder="Saisissez un titre pour cette carte..."
          defaultValue={undefined}
          errors={undefined}
          ref={textareaRef}
          onKeyDown={handleTextAreakeyDown}
        />
        <div className="flex items-center gap-x-2">
          <FormSubmit variant="secondary">Ajouter une carte</FormSubmit>
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
      onClick={enableEditing}
      role="button"
      className="flex items-center h-[40px] bg-c-grey-0 hover:bg-c-grey-1 text-c-grey-2 px-1 rounded cursor-pointer"
    >
      <Plus className="mr-2 h-5" /> Ajouter une autre carte
    </div>
  );
};
