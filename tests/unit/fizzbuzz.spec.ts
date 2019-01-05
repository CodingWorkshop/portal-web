import fizzbuzz from '../../src/domains/fizzbuzz';

describe('fizzbuzz.js', () => {
  it('input 30 output FizzBuzz', () => {
    expect(fizzbuzz('30')).toBe('FizzBuzz');
  });
  it('input 6 output Fizz', () => {
    expect(fizzbuzz('6')).toBe('Fizz');
  });
  it('input 20 output Buzz', () => {
    expect(fizzbuzz('20')).toBe('Buzz');
  });
});
