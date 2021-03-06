import { ButtonComponentSchema, ButtonGroupComponentSchema, InputGroupComponentSchema, SingleKeySchemaName, StepComponentSchema, StepsComponentSchema, TabComponentSchema, TabsetComponentSchema } from '../schemas';
import { builder } from '../utils/builder.utils';

export function inputGroup<N extends SingleKeySchemaName>(name?: N) {
  return builder<InputGroupComponentSchema<N>>().type('input-group').name(name);
}

export function buttonGroup<N extends SingleKeySchemaName>(name?: N) {
  return builder<ButtonGroupComponentSchema<N>>().type('button-group').name(name);
}

export function button<N extends SingleKeySchemaName>(name?: N) {
  return builder<ButtonComponentSchema<N>>().type('button').name(name);
}

export function steps<N extends SingleKeySchemaName>(name?: N) {
  return builder<StepsComponentSchema<N>>().type('steps').name(name);
}

export function step<N extends SingleKeySchemaName>(name?: N) {
  return builder<StepComponentSchema<N>>().type('step').name(name);
}

export function tabset<N extends SingleKeySchemaName>(name?: N) {
  return builder<TabsetComponentSchema<N>>().type('tabset').name(name);
}

export function tab<N extends SingleKeySchemaName>(name?: N) {
  return builder<TabComponentSchema<N>>().type('tab').name(name);
}