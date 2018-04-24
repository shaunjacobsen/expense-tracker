import moment from 'moment';

export default [
  {
    id: 1,
    description: 'Gum',
    amount: 195,
    note: '',
    createdAt: moment(0)
      .subtract(4, 'day')
      .valueOf()
  },
  {
    id: 2,
    description: 'Sugar',
    amount: 350,
    note: '',
    createdAt: moment(0)
      .add(4, 'day')
      .valueOf()
  },
  {
    id: 3,
    description: 'Flour',
    amount: 600,
    note: '',
    createdAt: moment(0)
      .subtract(2, 'day')
      .valueOf()
  }
];