import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Это каталожная страница</h1>
            <div className={'flex gap-2'}>
                <Button variant="default" asChild>
                    <Link href="/">На главную (ссылка как кнопка)</Link>
                </Button>
                <Button variant={'destructive'}>Кнопка</Button>
            </div>
        </div>
    );
}
