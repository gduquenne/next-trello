interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-white rounded shadow">{children}</div>
);
