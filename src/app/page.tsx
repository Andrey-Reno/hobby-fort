import Link from "next/link";
import {Button} from "@/shared/ui/Button";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Это хлавная страница</h1>
      <Link href="/catalog">В каталог</Link>
      <Button variant={"outline"}>Кнопка</Button>
    </div>
  );
}
