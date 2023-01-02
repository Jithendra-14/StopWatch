import React, {FC, ReactHTMLElement, ReactNode} from 'react'
import classes from './index.module.css';
import Snap from './snap';
import Button from '../../shared/Button';
import { ButtonColors, ButtonVariants, ClockProps } from '../../shared/utils';

type SnapShotsProps = {
  snaps: ClockProps[],
  onClear(event: React.MouseEvent<HTMLButtonElement>): void,
}

const Snapshots = ({snaps, onClear}: SnapShotsProps) => {
  return (
    <div className={classes.container}>
      <>
        <div className={classes.header}>
          <h3 className={classes.title}>Snap Shots</h3>
          <Button onClick={onClear} color={ButtonColors.SECONDARY} variant={ButtonVariants.OUTLINED}>Clear All</Button>
        </div>
        <ol>
          {snaps.map((obj, key) => {
            return <li key={key}><Snap snap={obj}></Snap></li>
          })}
        </ol>
      </>
    </div>
  )
}

export default Snapshots