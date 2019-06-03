import Helper from '@ember/component/helper';
import { ChangesetDef } from 'ember-changeset/types';
declare const ChangesetGet_base: Readonly<typeof Helper> & (new (properties?: object | undefined) => {
    invalidate: (this: ChangesetGet) => void;
} & Helper) & (new (...args: any[]) => {
    invalidate: (this: ChangesetGet) => void;
} & Helper);
export default class ChangesetGet extends ChangesetGet_base {
    changeset: ChangesetDef | null;
    compute(this: ChangesetGet, [changeset, fieldPath]: [ChangesetDef, string]): any;
}
export {};
