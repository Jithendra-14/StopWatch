import React, { FunctionComponent, lazy, useEffect, useState } from 'react'
import Display from './display';
import Controls from './controls';
import classes from './index.module.css';
import Snapshots from './snapshots';
import { ClockProps, getHours, getMinutes, getSeconds } from '../shared/utils';

const Clock = () => {

  const [snaps, setSnaps] = useState<ClockProps[]>([]);
  const [time, setTime] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  useEffect(()=>{
    let id: number;
    if(isCounting){
      id = setInterval(handleTimer, 1000)
    }
    return () => {
      clearInterval(id)
    }
  }, [isCounting])
  
  const handleTimer = () => {
    setTime(prev => prev + 1)
  }
  
  const handleSnap = (e: React.MouseEvent<HTMLButtonElement>) => {
    let obj: ClockProps = {
      hrs: getHours(time),
      mins: getMinutes(time),
      secs: getSeconds(time)
    }
    setSnaps(prev => [obj, ...prev])
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsCounting(false);
    setTime(0);
  }

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsCounting(prev => !prev);
  }

  const handleClear = () => {
    setSnaps([]);
  }

  return (
    <div className={classes.clock}>
      <h2 className={classes.title}>Stop Watch</h2>
      <Display hrs={getHours(time)} mins={getMinutes(time)} secs={getSeconds(time)}/>
      <Controls onSnap={handleSnap} onReset={handleReset} onPlayPause={handlePlayPause}/>
      <Snapshots snaps={snaps} onClear={handleClear}/>
    </div>
  )
}

export default Clock