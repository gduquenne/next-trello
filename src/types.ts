export type Card = {
  id: string;
  listId: List['id'];
  title: string;
  description?: string;
  followed?: boolean;
};

export type List = {
  id: string;
  title: string;
};

export type ListWithCards = List & { cards: Card[] };
