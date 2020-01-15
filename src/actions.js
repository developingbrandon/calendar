export const CHANGE_MONTH_INCREMEMNT = 'CHANGE_MONTH_INCREMEMNT';
export const CHANGE_MONTH_DECREMENT = 'CHANGE_MONTH_DECREMENT';

export function incrementMonth() {
    return {type: CHANGE_MONTH_INCREMENT}
};

export function decrementMonth() {
    return {type: CHANGE_MONTH_DECREMENT}
};
