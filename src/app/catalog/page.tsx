import { Button } from '@/shared/ui/Button';
import Link from 'next/link';
import { Input } from '@/shared/ui/Input';

export default function CatalogPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Это каталожная страница</h1>
            <Button variant="outline" asChild>
                <Link href="/">На главную (ссылка как кнопка)</Link>
            </Button>
            <div className="mt-2 flex gap-2">
                <Input placeholder="Плейсхолдер" />
                <Button>Сделать</Button>
            </div>
        </div>
    );
}
