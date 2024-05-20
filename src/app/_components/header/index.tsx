import Image from 'next/image';

export const Header = () => {
  return (
    <header className="header-container">
      <Image
        className="header-logo"
        width={80}
        height={30}
        alt="logo"
        src="/trello.png"
      />
    </header>
  );
};
