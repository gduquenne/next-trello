'use client';

import { v4 as uuidv4 } from 'uuid';
import { ElementRef, KeyboardEventHandler, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { useLists } from '@/stores/lists-store';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormTextarea } from '@/components/forms/form-textarea';
import { FormSubmit } from '@/components/forms/form-submit';
import { List } from '.';
import { ListFooter } from './list-footer';

interface AddNewListFormProps {}

export const AddNewListForm: React.FC<AddNewListFormProps> = () => {
  const formRef = useRef<ElementRef<'form'>>(null);
  const textareaRef = useRef<ElementRef<'textarea'>>(null);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { handleAddList } = useLists();

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
      handleAddList({ title, id: uuidv4() });
    }
    setIsEditing(false);
  };

  useOnClickOutside(formRef, () => setIsEditing(false));
  useEventListener('keydown', onKeyDown);

  if (isEditing) {
    return (
      <List>
        <ListFooter>
          <form action={handleSubmit} ref={formRef} className="space-y-2">
            <FormTextarea
              id="title"
              className="w-full h-fit"
              placeholder="Saisissez un titre pour cette liste..."
              defaultValue={undefined}
              errors={undefined}
              ref={textareaRef}
              onKeyDown={handleTextAreakeyDown}
            />
            <div className="flex items-center gap-x-2">
              <FormSubmit variant="secondary">Ajouter une liste</FormSubmit>
              <Button
                onClick={disableEditing}
                size="icon"
                variant="transparent-hover-dark"
              >
                <Plus className="rotate-45 text-c-grey-3" />
              </Button>
            </div>
          </form>
        </ListFooter>
      </List>
    );
  }

  return (
    <div
      onClick={enableEditing}
      role="button"
      className="flex items-center h-full bg-c-white-blur-0 hover:bg-c-white-blur-1 text-white px-1 rounded cursor-pointer"
    >
      <Plus className="mr-2 h-5" /> Ajouter une autre liste
    </div>
  );
};
