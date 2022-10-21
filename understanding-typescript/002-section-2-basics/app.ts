function combine(
  input1: number | string,
  input2: number | string
): string | number {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

combine(1, 2);
