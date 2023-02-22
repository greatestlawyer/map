import { error } from '../app';

test('тест, если код ошибки существует', () => {
  expect(error.translate(404)).toBe('Not Found («не найдено»)');
});

test('ошибка есть', () => {
  expect(error.translate(604)).toBe('Unknown error');
});