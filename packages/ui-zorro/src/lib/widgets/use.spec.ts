import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { SchemaUtil, ValueUtil, provideFluentForm } from '@fluent-form/core';
import { text } from '../compose/control';
import { withZorro } from '../feature';
import { useAllWidgets } from './use';

describe('useWidget', () => {
  let valueUtil: ValueUtil;
  let schemaUtil: SchemaUtil;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFluentForm(
          withZorro(useAllWidgets())
        )
      ]
    });

    valueUtil = TestBed.inject(ValueUtil);
    schemaUtil = TestBed.inject(SchemaUtil);
  });

  describe('built-in patcher', () => {
    it('heading patcher', () => {
      const schema = { kind: 'heading', level: 1, content: '' };
      expect(schemaUtil.patch(schema)).toEqual({ kind: 'heading', level: 1, content: '', col: 12 });
    });

    it('button patcher', () => {
      const schema = { kind: 'button', variants: { block: true } };
      expect(schemaUtil.patch(schema)).toEqual({ kind: 'button', variants: { block: true }, col: 12 });
    });

    it('alert patcher', () => {
      const schema = { kind: 'alert', message: '' };
      expect(schemaUtil.patch(schema)).toEqual({ kind: 'alert', message: '', col: 12 });
    });
  });

  describe('带验证器的图示', () => {
    it('length', () => {
      const schema = { kind: 'text', length: 1 };
      const validators = schemaUtil.validatorsOf(schema);
      // min & max
      expect(validators.length).toBe(2);
    });

    it('min/max', () => {
      const schema = text('name').length({ min: 1, max: 2 }).build();
      const validators = schemaUtil.validatorsOf(schema);

      expect(validators.length).toBe(2);
    });
  });

  describe('get value from model', () => {
    describe('date control', () => {
      it('with no init value and default value', () => {
        const model = {};
        const schema = schemaUtil.patch({ kind: 'date', key: 'date' });
        const value = valueUtil.valueOfModel(model, schema);

        expect(value).toBeNull();
      });

      it('with init value', () => {
        const now = Date.now();
        const model = { date: now };
        const schema = schemaUtil.patch({ kind: 'date', key: 'date' });
        const value = valueUtil.valueOfModel(model, schema) as Date;

        expect(value).toBeInstanceOf(Date);
        expect(value.getTime()).toBe(now);
      });

      it('with default value', () => {
        const now = Date.now();
        const model = {};
        const schema = schemaUtil.patch({ kind: 'date', key: 'date', defaultValue: now });
        const value = valueUtil.valueOfModel(model, schema) as Date;

        expect(value).toBeInstanceOf(Date);
        expect(value.getTime()).toBe(now);
      });
    });

    describe('time control', () => {
      it('with no init value and default value', () => {
        const model = {};
        const schema = schemaUtil.patch({ kind: 'time', key: 'time' });
        const value = valueUtil.valueOfModel(model, schema);

        expect(value).toBeNull();
      });

      it('with init value', () => {
        const now = Date.now();
        const model = { time: now };
        const schema = schemaUtil.patch({ kind: 'time', key: 'time' });
        const value = valueUtil.valueOfModel(model, schema) as Date;

        expect(value).toBeInstanceOf(Date);
        expect(value.getTime()).toBe(now);
      });

      it('with default value', () => {
        const now = Date.now();
        const model = {};
        const schema = schemaUtil.patch({ kind: 'time', key: 'time', defaultValue: now });
        const value = valueUtil.valueOfModel(model, schema) as Date;

        expect(value).toBeInstanceOf(Date);
        expect(value.getTime()).toBe(now);
      });
    });

    describe('date range control', () => {
      it('with no init value and default value', () => {
        const schema = schemaUtil.patch({ kind: 'date-range', key: ['begin', 'end'] });
        const model = {};
        const value = valueUtil.valueOfModel(model, schema);

        expect(value).toEqual(null);
      });

      it('with init value', () => {
        const begin = new Date(), end = new Date();
        const schema = schemaUtil.patch({ kind: 'date-range', key: ['begin', 'end'] });
        const model = { begin, end };
        const value = valueUtil.valueOfModel(model, schema);

        expect(value).toEqual([begin, end]);
      });

      it('with init value but is null', () => {
        const schema = schemaUtil.patch({ kind: 'date-range', key: ['begin', 'end'] });
        const model = { begin: null, end: null };
        const value = valueUtil.valueOfModel(model, schema);

        expect(value).toEqual(null);
      });

      it('with default value', () => {
        const begin = new Date(), end = new Date();
        const schema = schemaUtil.patch({ kind: 'date-range', key: ['begin', 'end'], defaultValue: [begin, end] });
        const model = {};
        const value = valueUtil.valueOfModel(model, schema);

        expect(value).toEqual([begin, end]);
      });
    });

    it('checkbox group control', () => {
      const schema = schemaUtil.patch({
        kind: 'checkbox-group',
        key: 'active',
        options: [
          { label: 'one', value: 1 },
          { label: 'two', value: 2 },
        ],
        defaultValue: [1]
      });
      const model = {};
      const value = valueUtil.valueOfModel(model, schema);

      expect(value).toEqual([
        { label: 'one', value: 1, checked: true },
        { label: 'two', value: 2, checked: false },
      ]);
    });
  });

  describe('get value from control', () => {
    describe('date control', () => {
      it('with has no value', () => {
        const schema = schemaUtil.patch({ kind: 'date', key: 'date', });
        const control = new FormControl(null);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toBeNull();
      });

      it('with has value', () => {
        const now = new Date();
        const schema = schemaUtil.patch({ kind: 'date', key: 'date', });
        const control = new FormControl(now);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toBe(new Date().setHours(0, 0, 0, 0));
      });

      it('with has value (time mode)', () => {
        const now = new Date();
        const schema = schemaUtil.patch({ kind: 'date', key: 'date', time: true });
        const control = new FormControl(now);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toBe(now.getTime());
      });
    });

    describe('time control', () => {
      it('with has no value', () => {
        const schema = schemaUtil.patch({ kind: 'time', key: 'time', });
        const control = new FormControl(null);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toBeNull();
      });

      it('with has value', () => {
        const now = new Date();
        const schema = schemaUtil.patch({ kind: 'time', key: 'time', });
        const control = new FormControl(now);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toBe(now.getTime());
      });
    });

    describe('date range control', () => {
      it('with has no value', () => {
        const schema = schemaUtil.patch({ kind: 'date-range', key: 'range', });
        const control = new FormControl(null);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toBeNull();
      });

      it('with has value', () => {
        const begin = new Date(), end = new Date();
        const schema = schemaUtil.patch({ kind: 'date-range', key: 'range', });
        const control = new FormControl([begin, end]);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toEqual([new Date().setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0)]);
      });

      it('with has value (time mode)', () => {
        const begin = new Date(), end = new Date();
        const schema = schemaUtil.patch({ kind: 'date-range', key: 'range', time: true });
        const control = new FormControl([begin, end]);
        const value = valueUtil.valueOfControl(control, schema);

        expect(value).toEqual([begin.getTime(), end.getTime()]);
      });
    });

    it('checkbox group control', () => {
      const schema = schemaUtil.patch({ kind: 'checkbox-group', key: 'active', options: [] });
      const control = new FormControl([
        { label: 'one', value: 1, checked: true },
        { label: 'two', value: 2, checked: false },
      ]);
      const value = valueUtil.valueOfControl(control, schema);

      expect(value).toEqual([1]);
    });
  });
});
