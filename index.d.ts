import EmberObject from '@ember/object';
import { Config, ValidatorFunc } from 'ember-changeset/types';
/**
 * Creates new changesets.
 *
 * @uses Ember.Evented
 */
export declare function changeset(obj: object, validateFn?: ValidatorFunc, validationMap?: {
    [s: string]: ValidatorFunc | ValidatorFunc[];
}, options?: Config): Readonly<typeof EmberObject> & (new (properties?: object | undefined) => any) & (new (...args: any[]) => any);
export default class Changeset {
    /**
     * Changeset factory
     *
     * @class Changeset
     * @constructor
     */
    constructor(obj: object, validateFn?: ValidatorFunc, validationMap?: {
        [s: string]: ValidatorFunc | ValidatorFunc[];
    }, options?: Config);
}
