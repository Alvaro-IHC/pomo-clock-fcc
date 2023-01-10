import { ReactNode } from 'react';
import { Label } from './../../components/atoms/Label/Label';
export interface ILabel {
  id: string
  className?: string
  children: string
}

export interface ILengthCtrl {
  type: string
  value: number
}

export interface ILength {
  type: string
  value: number
}

export interface IIconButton {
  children: ReactNode
}

export interface IClock {
  type: string
  children: string
}