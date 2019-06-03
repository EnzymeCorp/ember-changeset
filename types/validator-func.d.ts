import { ValidationResult } from 'ember-changeset/types/validation-result';
export declare type ValidatorFunc = {
    (params: {
        key: string;
        newValue: any;
        oldValue: any;
        changes: {
            [key: string]: any;
        };
        content: object;
    }): ValidationResult | Promise<ValidationResult>;
};
