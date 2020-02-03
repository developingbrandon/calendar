const CHANGE_MONTH_INCREMENT = 'CHANGE_MONTH_INCREMENT';
const CHANGE_MONTH_DECREMENT = 'CHANGE_MONTH_DECREMENT';

export const incrementMonth = () => {
      return {
              type: CHANGE_MONTH_INCREMENT
      }  
};

export const decrementMonth = () => {
        return {
                type: CHANGE_MONTH_DECREMENT
        }
};
