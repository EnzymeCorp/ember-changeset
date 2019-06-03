/**
 * Set a property on an `obj`.
 *
 * This function deletes every key prefixed by `key` in `obj`, as well
 * as every key in the path leading up to `key`.
 */
export default function setNestedProperty<T>(obj: {
    [key: string]: T;
}, key: string, value: T): T;
