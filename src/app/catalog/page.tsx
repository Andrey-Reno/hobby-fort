
import {Button} from "@/shared/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Это каталожная страница</h1>
      <Link href="/">На главную</Link>
      <Button variant='destructive'>Вот такие дела</Button>
    </div>
  );
}
