import { AsyncValidatorFn, ValidatorFn, Validators } from '@angular/forms';
import { COMPONENT_CONTAINER_SCHEMA_TYPES, COMPONENT_SCHEMA_TYPES, CONTROL_CONTAINER_SCHEMA_TYPES, TEXT_CONTROL_SCHEMA_TYPES } from '../constants';
import { InputControlSchema, TextareaControlSchema } from '../schemas';
import { AnySchemaName, SingleKeySchemaName } from '../schemas/abstract.schema';
import { AnyContainerSchema, AnyControlSchema, AnySchema, ComponentContainerSchema, ComponentSchema, ControlContainerSchema, ControlSchema, DoubleKeyControlSchema } from '../schemas/index.schema';
import { Builder, isBuilder } from './builder.utils';

/**
 * 是否为控件容器图示
 * @param schema
 */
export const isControlContainerSchema = (schema: AnySchema): schema is ControlContainerSchema => (
  CONTROL_CONTAINER_SCHEMA_TYPES.includes(schema.type)
);

/**
 * 是否为组件容器图示
 * @param schema
 */
export const isComponentContainerSchema = (schema: AnySchema): schema is ComponentContainerSchema => (
  COMPONENT_CONTAINER_SCHEMA_TYPES.includes(schema.type)
);

/**
 * 是否为文本图示
 * @param schema
 */
export const isTextControlSchema = (schema: AnySchema): schema is InputControlSchema | TextareaControlSchema => (
  TEXT_CONTROL_SCHEMA_TYPES.includes(schema.type)
);

/**
 * 是否为组件图示
 * @param schema
 */
export const isComponentSchema = (schema: AnySchema): schema is ComponentSchema => (
  COMPONENT_SCHEMA_TYPES.includes(schema.type)
);

/**
 * 是否为双字段图示
 * @param schema
 */
export const isDoubleKeySchema = (schema: AnySchema): schema is DoubleKeyControlSchema => (
  Array.isArray(schema.name)
);

/**
 * 标准化容器图示
 * @internal
 * @param schema
 */
const standardContainerSchema = <T extends AnyContainerSchema>(schema: T): T => {
  const schemas = standardSchemas(schema.schemas);

  // 如果是数组表单图示，自动补充子图示的名称为索引值
  if (schema.type === 'array') {
    schemas.forEach((schema, index) => schema.name = index);
  }

  schema.schemas = schemas;

  return schema;
}

/**
 * 标准化文本控件图示
 * @internal
 * @param schema
 */
const standardTextControlSchema = <T extends InputControlSchema | TextareaControlSchema>(schema: T): T => {
  const utils = controlSchemaUtils(schema);

  if (schema.type === 'input' && schema.subtype === 'email') {
    utils.addValidator(Validators.email);
  }

  if (schema.length) {
    if (typeof schema.length === 'number') {
      utils.addValidator([
        Validators.minLength(schema.length),
        Validators.maxLength(schema.length)
      ]);
    } else {
      const { min, max } = schema.length as { max?: number, min?: number };

      min && utils.addValidator(Validators.minLength(min));
      max && utils.addValidator(Validators.maxLength(max));
    }
  }

  return schema;
}

/**
 * 标准化图示
 * @param schema
 */
export const standardSchema = <T extends AnySchema>(schema: T | Builder<T, T, {}>): T => {
  let _schema = (isBuilder(schema) ? schema.build() : { ...schema }) as AnySchema;

  if (isControlContainerSchema(_schema) || isComponentContainerSchema(_schema)) {
    standardContainerSchema(_schema);
  } else if (isTextControlSchema(_schema)) {
    standardTextControlSchema(_schema);
  }

  if ('required' in _schema && _schema.required) {
    controlSchemaUtils(_schema as ControlSchema).addValidator(Validators.required);
  }

  return _schema as T;
};

/**
 * 标准化所有图示
 * @param schemas
 */
export const standardSchemas = (schemas: (AnySchema | Builder<AnySchema, AnySchema, {}>)[]) => (
  schemas.map(schema => standardSchema(schema))
);

export function controlSchemaUtils<S extends ControlSchema>(schema: S) {
  return new ControlSchemaUtils(schema);
}

export class ControlSchemaUtils<S extends ControlSchema> {
  constructor(private readonly schema: S) { }

  addValidator(validator: ValidatorFn | ValidatorFn[]) {
    const validators = Array.isArray(validator) ? validator : [validator];

    if (this.schema.validator) {
      this.schema.validator = this.schema.validator.concat(validators);
    } else {
      this.schema.validator = validators;
    }

    return this;
  }

  addAsyncValidator(validator: AsyncValidatorFn | AsyncValidatorFn[]) {
    const validators = Array.isArray(validator) ? validator : [validator];

    if (this.schema.asyncValidator) {
      this.schema.asyncValidator = this.schema.asyncValidator.concat(validators);
    } else {
      this.schema.asyncValidator = validators;
    }

    return this;
  }
}

export function schemasUtils<S extends AnySchema[]>(schemas: S) {
  return new SchemasUtils(schemas);
}

export class SchemasUtils<S extends AnySchema[]> {
  constructor(private readonly schemas: S) { }

  find<T extends AnySchema>(name: AnySchemaName): T | undefined;
  find<T extends AnySchema>(path: [...SingleKeySchemaName[], AnySchemaName]): T | undefined;
  find<T extends AnySchema>(path: AnySchemaName | [...SingleKeySchemaName[], AnySchemaName]): T | undefined;
  find<T extends AnySchema>(path: AnySchemaName | [...SingleKeySchemaName[], AnySchemaName]): T | undefined {
    let schemas = this.schemas as AnySchema[];
    // 如果是数组，那么除了最后一个元素，其他元素所对应的 schema 一定是 container schema
    if (Array.isArray(path)) {
      const [endPath, ...beforePath] = path.reverse() as [AnySchemaName, ...SingleKeySchemaName[]];
      schemas = beforePath.reduceRight((schemas, name) => (
        (schemas.find(o => o.name === name) as AnyContainerSchema).schemas as AnyControlSchema[]
      ), schemas as AnyControlSchema[]);
      path = endPath;
    }

    return schemas.find(o => {
      // 处理双字段模式
      if (Array.isArray(o.name) && Array.isArray(path)) {
        return arraysEqual(o.name, path);
      }

      return o.name === path;
    }) as T | undefined;
  }
}

/** @internal */
function arraysEqual(a: unknown[], b: unknown[]): boolean {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
