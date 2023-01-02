export enum ButtonColors {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
};

export enum ButtonVariants {
	CONTAINED = 'contained',
	OUTLINED = 'outlined'
};

export type ClockProps = {
    hrs: number,
    mins: number,
    secs: number
}

export const convertToDoubleDigitString = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
}

export const getHours = (time: number): number => {
    return Math.floor(time/3600)
}

export const getMinutes = (time: number): number => {
    return Math.floor((time - (getHours(time)*3600))/60);
}

export const getSeconds = (time: number): number => {
    return (time - (getMinutes(time)*60) - (getHours(time)*3600));
}