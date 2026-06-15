import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  btnPrimary,
  btnPrimaryOnDark,
  btnSecondary,
  btnSecondaryOnDark,
} from "@/lib/brandAccent";

type ServiceDetailButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function ServiceDetailPrimaryButton({
  className,
  fullWidth,
  children,
  ...props
}: ServiceDetailButtonProps) {
  return (
    <button
      type="button"
      className={cn(btnPrimary, fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ServiceDetailSecondaryButton({
  className,
  fullWidth,
  children,
  ...props
}: ServiceDetailButtonProps) {
  return (
    <button
      type="button"
      className={cn(btnSecondary, fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ServiceDetailPrimaryButtonDark({
  className,
  fullWidth,
  children,
  ...props
}: ServiceDetailButtonProps) {
  return (
    <button
      type="button"
      className={cn(btnPrimaryOnDark, fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ServiceDetailSecondaryButtonDark({
  className,
  fullWidth,
  children,
  ...props
}: ServiceDetailButtonProps) {
  return (
    <button
      type="button"
      className={cn(btnSecondaryOnDark, fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}
