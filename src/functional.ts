export function fillUntil<T>(
  endValue: T,
  callback: (value: T) => T,
  initial: T
): T[] {
  var value = initial;
  var ret = [];

  while (true) {
    // eslint-disable-line no-constant-condition
    value = callback(value);
    if (value === endValue) {
      return ret;
    }

    ret.push(value);
  }
}
