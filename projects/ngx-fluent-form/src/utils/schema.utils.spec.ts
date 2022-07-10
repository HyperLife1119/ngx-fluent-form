import { array, group, input, inputGroup, slider } from '../fluent-form.builder';
import { AnyBuilder, AnySchema } from '../schemas/index.schema';
import { findSchema, standardSchema, standardSchemas } from './schema.utils';

describe('schema.utils', () => {
  it('应该能正确标准化不同的图示', () => {
    const value: AnySchema[] = [{ type: 'input', name: 'name' }];
    const schemas = standardSchemas([input('name')] as AnyBuilder[]);

    expect(schemas).toEqual(value);
  });

  it('应该能正确标准化嵌套图示（group）', () => {
    const value: AnySchema[] = [{
      type: 'group',
      name: 'name',
      schemas: [
        { type: 'input', name: 'name' }
      ]
    }];

    const schemas = standardSchemas([
      group('name').schemas(
        input('name')
      )
    ] as AnyBuilder[]);

    expect(schemas).toEqual(value);
  });

  it('应该能正确标准化嵌套图示（array）', () => {
    const value: AnySchema[] = [{
      type: 'array',
      name: 'name',
      schemas: [{
        type: 'group',
        name: 0,
        schemas: [
          { type: 'input', name: 'name' }
        ]
      }]
    }];

    const schemas = standardSchemas([
      array('name').schemas(
        group().schemas(
          input('name')
        )
      )
    ] as AnyBuilder[]);

    expect(schemas).toEqual(value);
  });

  it('应该能正确标准化图示（input-group）', () => {
    const value: AnySchema[] = [{
      type: 'input-group',
      name: 'name',
      schemas: [
        { type: 'input', name: 'name' }
      ]
    }];

    const schemas = standardSchemas([
      inputGroup('name').schemas(
        input('name')
      )
    ] as AnyBuilder[]);

    expect(schemas).toEqual(value);
  });

  it('应该能在图示列表中找到目标图示', () => {
    const target = standardSchema(input('name'));
    const schemas = [target];
    const schema = findSchema(schemas, 'name');

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（一级）', () => {
    const target = standardSchema(input('name'));
    const schemas = standardSchemas([
      group('group').schemas(target)
    ]);
    const schema = findSchema(schemas, ['group', 'name']);

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（多级）', () => {
    const target = standardSchema(input('name'));
    const schemas = standardSchemas([
      group('group').schemas(
        group('group').schemas(target)
      )
    ]);
    const schema = findSchema(schemas, ['group', 'group', 'name']);

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（一维数组）', () => {
    const target = standardSchema(input(0));
    const schemas = standardSchemas([
      array('array').schemas(target)
    ]);
    const schema = findSchema(schemas, ['array', 0]);

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（多维数组）', () => {
    const target = standardSchema(input(0));
    const schemas = standardSchemas([
      array('array').schemas(
        array().schemas(target)
      )
    ]);
    const schema = findSchema(schemas, ['array', 0, 0]);

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（对象嵌套数组）', () => {
    const target = standardSchema(input(0));
    const schemas = standardSchemas([
      group('group').schemas(
        array('array').schemas(target)
      )
    ]);
    const schema = findSchema(schemas, ['group', 'array', 0]);

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（数组嵌套对象）', () => {
    const target = standardSchema(input('name'));
    const schemas = standardSchemas([
      array('array').schemas(
        group(0).schemas(target)
      )
    ]);
    const schema = findSchema(schemas, ['array', 0, 'name']);

    expect(schema).toEqual(target);
  });

  it('应该能在图示列表中找到目标图示（双字段）', () => {
    const target = standardSchema(slider(['begin', 'end']));
    const schemas = [target];
    const schema = findSchema(schemas, [['begin', 'end']]);

    expect(schema).toEqual(target);
  });
});