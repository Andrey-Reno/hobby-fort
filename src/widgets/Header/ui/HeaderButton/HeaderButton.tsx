import { ComponentProps } from 'react';
import { Button, buttonVariants } from '@/shared/ui/Button';
import { cn } from '@/shared/lib/cn';
import { VariantProps } from 'class-variance-authority';

type HeaderButtonProps = ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants>;

export function HeaderButton({ className, ...props }: HeaderButtonProps) {
  return <Button {...props} className={cn('h-full rounded-none', className)} />;
}
