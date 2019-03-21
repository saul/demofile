// Based upon https://github.com/Microsoft/TypeScript/issues/8655
function assertExists<Type>(
  value: Type | null | undefined,
  messageToThrow?: string
): Type {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    throw new Error(
      messageToThrow || "assertExists: The passed value doesn’t exist"
    );
  }
}

export default assertExists;
