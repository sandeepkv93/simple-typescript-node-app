import {Person} from './person';
import * as _ from 'lodash';

let aPerson: Person = new Person('Sandeep','Vishnu');
console.log(aPerson);

let numArray = [1, 2, 3, 4, 5];
console.log('Orginal Array');
console.log(numArray);
_.reverse(numArray);
console.log('Array after reversal');
console.log(numArray);