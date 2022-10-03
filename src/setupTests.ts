import { configure } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { toBeWithin } from 'jest-extended';

configure({
  testIdAttribute: 'id',
});

expect.extend({ toBeWithin });
