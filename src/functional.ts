export function fillUntil<T>(
  endValue: T,
  callback: (value: T) => T,
  initial: T
): T[] {
  let value = initial;
  const ret = [];

  while (true) {
    // eslint-disable-line no-constant-condition
    value = callback(value);
    if (value === endValue) {
      return ret;
    }

    ret.push(value);
  }
}
