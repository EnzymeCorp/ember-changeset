import ComputedProperty from '@ember/object/computed';
/**
 * Compute the array form of an object.
 *
 * Each value of the object is transformed by a passed-in `transform`
 * function.
 *
 * Returns a list of objects, where each object has the form
 * `{ key, value }`. If `flattenObjects` is true and the result of
 * `transform` is an Object, the resulting object has the form
 * `{ key, ...transformResult }`.
 */
export default function objectToArray<T>(objKey: string, transform?: (arg: T) => any, flattenObjects?: boolean): ComputedProperty<object[], object[]>;
