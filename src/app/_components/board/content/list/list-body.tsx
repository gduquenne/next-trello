interface ListBodyProps {
  children: React.ReactNode;
}

export const ListBody: React.FC<ListBodyProps> = ({ children }) => (
  <div className="px-2 space-y-2 last:mb-0">{children}</div>
);
