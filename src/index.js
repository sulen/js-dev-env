import './index.css';
import numeral from 'numeral';

/* eslint-disable no-console */

const value = numeral(4351).format('$0,0.00');
console.log(value);
