import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href={'/'} className={'flex h-full items-center justify-center px-3'}>
      <Image
        src="/assets/logo-horizontal.svg"
        alt="Логотип магазина Hobby Fort"
        width={96}
        height={30}
      />
    </Link>
  );
};
