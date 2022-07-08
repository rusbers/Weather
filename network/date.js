import format from 'date-fns/format';

const getDate = {
  hourMinutes(milliseconds) {
    if (!milliseconds) return;
    
    return format(new Date(milliseconds*1000), 'HH:mm');
  },

  dayMonth(milliseconds) {
    if (!milliseconds) return;
    
    return format(new Date(milliseconds*1000), 'dd LLLL');
  }
};

export default getDate