import { exampleOne } from './geoWealth';

describe('Test Cases for exampleOne method', () => {
  const provider = [
    {
      items: [1, 2, 3, 4, 5, 6, 7],
      targetValue: 3,
      expectedResult: true,
      testMessage: 'Case 1'
    },
    {
      items: [2, 2, 6, 7, 4, 2, 1, 3, 5],
      targetValue: 99,
      expectedResult: false,
      testMessage: 'Case 2'
    },
    {
      items: [2, 2, 6, 7, 4, 2, 1, 3, 5],
      targetValue: 0,
      expectedResult: true,
      testMessage: 'Case 3'
    },
    {
      items: [1, 7, 1, 1, 1, 5, 6, 1],
      targetValue: 3,
      expectedResult: true,
      testMessage: 'Case 4'
    },
    {
      items: [1, 7, 1, 1, 1, 5, 6, 1],
      targetValue: 4,
      expectedResult: false,
      testMessage: 'Case 5'
    }
  ];

  provider.forEach(({ items, targetValue, expectedResult, testMessage }, index) => {
    it(`Case: ${index}, Message: ${testMessage}`, () => {
      const result = exampleOne(items, targetValue);
      expect(result).toBe(expectedResult);
    });
  });
});
