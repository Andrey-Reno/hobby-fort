import * as React from 'react';

import { cn } from '@/shared/lib/cn';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                [
                    // Layout
                    'flex w-full min-w-0 rounded-md',

                    // Sizing
                    'h-9 px-3 py-1',

                    // Typography
                    'text-base md:text-sm',

                    // Colors / Background / Placeholder
                    'text-foreground placeholder:text-muted-foreground dark:bg-input/30 bg-transparent',

                    // Border & Shadow
                    'border-input border shadow-xs',

                    // Transition & Focus
                    'focus-visible:ring-ring/50 focus-visible:border-ring transition-[color,box-shadow] outline-none focus-visible:ring-[3px]',

                    // Selection
                    'selection:bg-primary selection:text-primary-foreground',

                    // Disabled state
                    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',

                    // Invalid state (ARIA)
                    'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',

                    // File input (button & text)
                    'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
                ],
                className,
            )}
            {...props}
        />
    );
}

export { Input };
