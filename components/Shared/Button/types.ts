import { ButtonHTMLAttributes } from 'react';

export type Variant = {
  PRIMARY: string;
  OUTLINE: string;
  SECONDARY: string;
};

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof Variant;
}
