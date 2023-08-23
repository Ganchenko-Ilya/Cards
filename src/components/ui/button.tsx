import s from './button.module.scss'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  as?: T
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props
  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
