import { assign } from '@ember/polyfills';
export default function pureAssign(...objects) {
    return assign({}, ...objects);
}
