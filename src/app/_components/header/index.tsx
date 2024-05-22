import Image from 'next/image';

export const Header: React.FC = () => (
  <header className="flex items-center justify-center bg-c-black-0 h-[40px]">
    <Image
      className="cursor-pointer width-[80px] opacity-50 hover:opacity-80"
      width={80}
      height={30}
      alt="logo"
      src="/trello.png"
    />
  </header>
);
