/**
 * Inflate an Object, optionally transforming each key's value by
 * `transform` function.
 */
export default function inflate<T>(dependentKey: string, transform?: (arg: T) => any): {
    [key: string]: any;
};
