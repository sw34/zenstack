import type {
    AttributeParam,
    DataModelField as _DataModelField,
    DataModel as _DataModel,
    DataModelAttribute as _DataModelAttribute,
    AttributeArg as _AttributeArg,
} from '@zenstackhq/language/ast';

export * from '@zenstackhq/language/ast';

export interface AttributeArg extends _AttributeArg {
    /**
     * Resolved attribute param declaration
     */
    $resolvedParam?: AttributeParam;
}

export const AttributeArg = 'AttributeArg';

export interface DataModelField extends _DataModelField {
    $inheritedFrom?: DataModel;
}

export const DataModelField = 'DataModelField';

export interface DataModelAttribute extends _DataModelAttribute {
    $inheritedFrom?: DataModel;
}

export const DataModelAttribute = 'DataModelAttribute';

export interface DataModel extends _DataModel {
    /**
     * Indicates whether the model is already merged with the base types
     */
    $baseMerged?: boolean;

    /**
     * All fields including those marked with `@ignore`
     */
    $allFields?: _DataModelField[];
}

export const DataModel = 'DataModel';
