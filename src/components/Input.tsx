import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, isInvalid = false, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-md border bg-[var(--color-content-bg)] px-3 py-2 text-base outline-none",
        "border-[color-mix(in_oklab,var(--color-fg),transparent_90%)] focus:border-[var(--color-fg)]",
        isInvalid && "border-[var(--color-danger)] focus:border-[var(--color-danger)]",
        className
      )}
      {...props}
    />
  );
});

export default Input;
