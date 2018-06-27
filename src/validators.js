
export const required = value => value? undefined : 'Required';

export const nonEmpty = value => value.trim() !== ''? undefined : 'Empty Input';

export const lenFive =  value => value.length === 5? undefined : 'Invalid Tracking Number';

export const onlyNum = value => parseInt(value) > 9999? undefined : 'Numbers Only';