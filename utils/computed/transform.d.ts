/**
 * Transform an Object's values with a `transform` function.
 */
export default function transform<T>(dependentKey: string, transform: (arg: T) => any): object;
