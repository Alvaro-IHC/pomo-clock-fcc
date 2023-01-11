import { ReactNode } from 'react';
import { Label } from '../components/atoms/Label/Label';
export interface ILabel {
  id: string
  className?: string
  children: string
}

export interface ILengthCtrl {
  type: string
  value: number
  min?: number
  max?: number
}

export interface ILength {
  type: string
  value: number
}

export interface IIconButton {
  id: string
  children: ReactNode
  onClick: () => void
}

export interface IClock {
  type: string
  children: string
}

export interface IStateContext {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  breakValue: number
  setBreakValue: React.Dispatch<React.SetStateAction<number>>
  sessionValue: number
  setSessionValue: React.Dispatch<React.SetStateAction<number>>
  startTimer: () => void
  intervalID: React.MutableRefObject<number>
  setTimeCounter: React.Dispatch<React.SetStateAction<number>>
}