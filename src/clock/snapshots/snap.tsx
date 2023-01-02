import React, { FC } from 'react'
import { ClockProps, convertToDoubleDigitString as formatNum } from '../../shared/utils'

type SnapProps = {
  snap: ClockProps
}

const Snap = ({snap}: SnapProps) => {
  const {hrs, mins, secs} = snap;
  return (
    <div>{`${formatNum(hrs)} : ${formatNum(mins)} : ${formatNum(secs)}`}</div>
  )
}

export default Snap