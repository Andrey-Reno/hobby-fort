'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/Sheet';
import { BurgerHeaderButton } from '@/widgets/Header/ui/BurgerHeaderButton';
import { Button } from '@/shared/ui/Button';
import { useCallback, useState } from 'react';

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <>
      <BurgerHeaderButton onClick={onClick} />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side={'left'} className="w-3/4">
          <SheetHeader>
            <SheetTitle>Заголовок</SheetTitle>
            <SheetDescription>
              Мы вынуждены отталкиваться от того, что социально-экономическое развитие в
              значительной степени обусловливает важность модели развития
            </SheetDescription>
          </SheetHeader>
          <ul className={'px-4'}>
            Противоположная точка зрения подразумевает, что реплицированные с зарубежных источников,
            современные исследования, инициированные исключительно синтетически, заблокированы в
            рамках своих собственных рациональных ограничений. Но предприниматели в сети интернет
            подвергнуты целой серии независимых исследований! Следует отметить, что постоянное
            информационно-пропагандистское обеспечение нашей деятельности требует определения и
            уточнения вывода текущих активов. В целом, конечно, существующая теория предопределяет
            высокую востребованность позиций, занимаемых участниками в отношении поставленных задач.
            Задача организации, в особенности же современная методология разработки обеспечивает
            широкому кругу (специалистов) участие в формировании своевременного выполнения
            сверхзадачи.
          </ul>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
