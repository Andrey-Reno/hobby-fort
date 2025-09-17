import { Button, buttonVariants } from '@/shared/ui/Button';
import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/cn';

const headerButtonVariants = cva(buttonVariants(), {
    variants: {
        destination: {
            header: 'bg-background hover:bg-accent rounded-full border',
        },
    },
});

type HeaderButtonProps = ComponentProps<typeof Button> & VariantProps<typeof headerButtonVariants>;

export function HeaderButton({ className, ...props }: HeaderButtonProps) {
    return <Button {...props} className={cn('h-full rounded-none', className)} />;
}
