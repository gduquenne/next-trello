interface ListHeaderProps {
  children: React.ReactNode;
}

export const ListHeader: React.FC<ListHeaderProps> = ({ children }) => (
  <div className="flex justify-between items-center px-2.5 py-2 text-c-grey-3 text-sm font-semibold">
    {children}
  </div>
);
