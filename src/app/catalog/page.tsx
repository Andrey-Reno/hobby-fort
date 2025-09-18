import { Button } from '@/shared/ui/Button';
import Link from 'next/link';
import { Input } from '@/shared/ui/Input';
import { BurgerMenu } from '@/widgets/Header/ui/BurgerSideMenu';

export default function CatalogPage() {
  return (
    <>
      <h1>Это каталожная страница</h1>
      <Button variant="outline" asChild>
        <Link href="/">На главную (ссылка как кнопка)</Link>
      </Button>
      <div className="mt-2 flex gap-2">
        <Input placeholder="Плейсхолдер" />
        <Button>Сделать</Button>
      </div>
      <div className="mt-20">
        <BurgerMenu />
      </div>
    </>
  );
}
