export default function assertExists<T>(
  value: T | null | undefined,
  message?: string
): T {
  if (value == null) throw new Error(message || "expected non-null value");
  return value;
}
