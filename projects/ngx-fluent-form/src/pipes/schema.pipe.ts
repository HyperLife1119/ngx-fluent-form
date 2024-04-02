import { inject, Pipe, PipeTransform } from '@angular/core';
import { AbstractControlContainerSchema, AbstractControlSchema, AnyContainerSchema, SchemaKey, SingleSchemaKey } from '../schemas';
import { SchemaUtil } from '../utils';

/**
 * @internal
 */
@Pipe({
  name: 'schema',
  standalone: true
})
export class FluentSchemaPipe implements PipeTransform {
  private readonly schemaUtil = inject(SchemaUtil);

  /**
   * 将 value 作为 key，获取 schemas 中的图示
   * @param value
   * @param schemas
   * @param type 用来重载方法的返回值
   */
  transform(value: SingleSchemaKey | SchemaKey[], schema: AnyContainerSchema, type: 'control'): AbstractControlSchema | null;
  transform(value: SingleSchemaKey | SchemaKey[], schema: AnyContainerSchema, type: 'group'): AbstractControlContainerSchema | null;
  transform(value: SingleSchemaKey | SchemaKey[], schema: AnyContainerSchema, type: 'array'): AbstractControlContainerSchema | null;
  transform(value: SingleSchemaKey | SchemaKey[], schema: AnyContainerSchema): AbstractControlSchema | AbstractControlContainerSchema | null;
  transform(value: SingleSchemaKey | SchemaKey[], schema: AnyContainerSchema): AbstractControlSchema | AbstractControlContainerSchema | null {
    return this.schemaUtil.find(schema, value) as AbstractControlSchema | AbstractControlContainerSchema | null;
  }

}
