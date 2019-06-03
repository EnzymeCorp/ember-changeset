import ComputedProperty from '@ember/object/computed';
/**
 * Shallow object comparison computed property. Checks all key/value pairs on
 * the first object and compares against the second object. Essentially, this
 * means that the second object must have the same key/values as the first, but
 * not vice versa.
 *
 * @public
 * @param  {string} sourceKey dependent key for first object
 * @param  {string} compareKey dependent key for second object
 * @return {boolean}
 */
export default function objectEqual(sourceKey: string, compareKey: string): ComputedProperty<boolean, boolean>;
