import Changeset from 'ember-changeset';
import { Config } from 'ember-changeset/types/config';
import { ValidatorFunc } from 'ember-changeset/types/validator-func';
export declare function changeset([obj, validations]: [object | Promise<any>, ValidatorFunc], options?: Config): Changeset | Promise<Changeset>;
declare const _default: any;
export default _default;
