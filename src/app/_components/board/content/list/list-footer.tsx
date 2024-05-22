interface ListFooterProps {
  children: React.ReactNode;
}

export const ListFooter: React.FC<ListFooterProps> = ({ children }) => (
  <div className="p-2">{children}</div>
);
