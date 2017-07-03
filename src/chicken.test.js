import Chicken from './chicken';

test('Chicken.cluck', () => {
  const testChicken = new Chicken('Test');
  expect(testChicken.cluck()).toBe('Hiya, I am Test');
});
