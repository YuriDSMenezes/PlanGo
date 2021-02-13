import { getMonth, getYear } from 'date-fns';

export default {
  currentYear: getYear(new Date()),
  currentMonth: getMonth(new Date()) + 1,
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
};
