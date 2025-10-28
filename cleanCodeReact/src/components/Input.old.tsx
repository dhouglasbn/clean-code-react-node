import type { ReactNode } from "react";

interface InputProps {
  label?: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
}

// We are creating too much configuration for our component
// So, we created many possibilities of combinations for a single input
// This is bad, we should use composition pattern
export function Input({ label, icon = null, leftIcon = null, errorMessage }: InputProps) {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      {leftIcon}
      <input type="text" />
      {icon}

      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  )
}