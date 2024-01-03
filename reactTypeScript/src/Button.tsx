import type { ComponentProps, ReactNode } from "react"

type ButtonProps = {
    outline?: boolean
    children: ReactNode
} & ComponentProps<'button'>

const Button = ({outline,children, ...props}:ButtonProps) => {
  return (
    <button
        style={{border: outline ? '3px solid #000' : undefined}}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button