import React, { FunctionComponent } from 'react'
import Button from '../shared/Button';
import { ButtonVariants } from '../shared/utils';
import classes from './index.module.css';

type ControlProps = {
  onSnap(event: React.MouseEvent<HTMLButtonElement>): void,
  onReset(event: React.MouseEvent<HTMLButtonElement>): void,
  onPlayPause(event: React.MouseEvent<HTMLButtonElement>): void,
}

const Contols = ({onSnap, onReset, onPlayPause}: ControlProps) => {
  return (
    <div className={classes.panel}>
      <Button onClick={onSnap} variant={ButtonVariants.OUTLINED}>snap</Button>
      <Button onClick={onPlayPause} variant={ButtonVariants.OUTLINED}>pause / play</Button>
      <Button onClick={onReset} variant={ButtonVariants.OUTLINED}>reset</Button>
    </div>
  )
}

export default Contols;