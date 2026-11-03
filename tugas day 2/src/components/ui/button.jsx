import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950',
        emerald:
          'bg-[#078B59] text-white hover:bg-[#06744A] active:bg-[#055E3B]',
        blue:
          'bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF]',
        destructive:
          'bg-white text-[#DC2626] border border-neutral-200 hover:bg-red-50 hover:border-red-200',
        outline:
          'border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300',
        secondary:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
        ghost:
          'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900',
        link:
          'text-neutral-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-6 text-sm',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
