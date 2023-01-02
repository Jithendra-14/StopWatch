import React, { FunctionComponent, ReactNode } from 'react';
import classes from './index.module.css';
import { ButtonColors, ButtonVariants } from '../utils';

type ButtonProps = {
	children?: ReactNode;
	onClick(event: React.MouseEvent<HTMLButtonElement>): void;
	variant?: ButtonVariants;
	color?: ButtonColors;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, onClick, variant = ButtonVariants.CONTAINED, color = ButtonColors.PRIMARY } = props;
  return (
    <button onClick={onClick} 
		className={`
			${classes.button}
			${classes[`${color}-${variant}`]}
		`}
		>
			{children}
		</button>
  )
}

export default Button