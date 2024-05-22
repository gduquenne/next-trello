interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => (
  <div className="flex flex-col rounded bg-c-grey-0 w-[272px] h-fit">
    {children}
  </div>
);
