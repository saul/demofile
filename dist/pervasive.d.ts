/**
 * Recursively makes all properties in T required and non-nullable
 */
export declare type RequiredNonNullable<T> = {
    [P in keyof T]-?: RequiredNonNullable<NonNullable<T[P]>>;
};
