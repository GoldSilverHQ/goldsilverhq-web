import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-bg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_50%,transparent)] hover:bg-gold-soft",
        ghost:
          "bg-transparent text-silver shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-silver)_22%,transparent)] hover:text-fg hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-silver)_45%,transparent)]",
        text: "bg-transparent text-gold hover:text-gold-soft px-0",
      },
      size: {
        md: "min-h-11 rounded-full px-5 py-2.5 text-sm",
        sm: "min-h-10 rounded-full px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
