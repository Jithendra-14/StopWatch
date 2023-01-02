import React, {FC, } from 'react';
import { ClockProps, convertToDoubleDigitString as formatNum } from '../shared/utils';
import classes from './index.module.css';

const Display = (props: ClockProps) => {
  const {hrs=0, mins=0, secs=0} = props;
  return (
    <div className={classes.display}>
      <div className={classes.time}>{formatNum(hrs)}</div>
      <div className={classes.divider}>:</div>
      <div className={classes.time}>{formatNum(mins)}</div>
      <div className={classes.divider}>:</div>
      <div className={classes.time}>{formatNum(secs)}</div>
    </div>
  )
}

export default Display;