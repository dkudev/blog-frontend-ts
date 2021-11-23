function castToInt(value: number) {
  return Number(value) || 0;
}

export function exampleOne(array: Array<number>, targetValue: number): boolean {
  let targetSum = 0;
  for (let i = 0; i <= array.length; i++) {
    const current = castToInt(array[i]);
    targetSum += current;
    if (targetSum === targetValue || current === targetValue) {
      break;
    } else if (targetSum > targetValue) {
      targetSum = 0;
    } else if (current + castToInt(array[i + 1]) === targetValue) {
      targetSum = current + castToInt(array[i + 1]);
      break;
    }
  }

  return targetSum === targetValue;
}

export function exampleSecond(array: Array<number>, targetValue: number): boolean {
  let target = 0;
  for (let i = 0; i <= array.length; i++) {
    target = castToInt(array[i]);
    if (target === targetValue) {
      break;
    }
  }

  return target !== targetValue;
}
