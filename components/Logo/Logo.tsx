import Image from 'next/image';
import logoImg from './logo.jpg';

export function Logo() {
  return (
    <Image
      src={logoImg}
      alt="Logo"
      width={48}
      height={48}
      style={{ borderRadius: '16px' }}
    />
  );
}
