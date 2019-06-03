/**
 * Merges all sources together, excluding keys in excludedKeys.
 *
 * @param  {string[]}    excludedKeys
 * @param  {...object}        sources
 *
 * @return {object}
 */
export default function objectWithout<T>(excludedKeys: string[], ...sources: T[]): T;
