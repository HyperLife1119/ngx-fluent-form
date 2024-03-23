import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgClass, NgFor, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray } from '@angular/forms';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FluentFormItemOutletComponent, FluentGridModule } from '../../components';
import { FluentBindingDirective, FluentContextGuardDirective, FluentParentRowDirective, FluentVarDirective } from '../../directives';
import { FluentColumnPipe, FluentReactivePipe, FluentTemplatePipe, InvokePipe } from '../../pipes';
import { AbstractSchema, AddableButton, SchemaKind, TabsArraySchema, WithOutSchemaReactiveFn } from '../../schemas';
import { FormUtil, SchemaUtil, isBoolean, isNumber, isUndefined } from '../../utils';
import { AbstractWidget, WidgetTemplateContext } from '../abstract.widget';

type TabsArrayWidgetTemplateContext = WidgetTemplateContext<TabsArraySchema, FormArray>;

/**
 * @internal
 */
@Component({
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
    NgTemplateOutlet,
    DragDropModule,
    NzFormModule,
    NzTabsModule,
    NzOutletModule,
    FluentGridModule,
    FluentFormItemOutletComponent,
    FluentBindingDirective,
    FluentContextGuardDirective,
    FluentParentRowDirective,
    FluentColumnPipe,
    FluentReactivePipe,
    FluentTemplatePipe,
    FluentVarDirective,
    InvokePipe
  ],
  templateUrl: './tabs-array.widget.html'
})
export class TabsArrayWidget extends AbstractWidget<TabsArrayWidgetTemplateContext> {
  private readonly schemaUtil = inject(SchemaUtil);
  private readonly formUtil = inject(FormUtil);

  protected readonly SchemaKind = SchemaKind;

  protected push(control: FormArray, schema: TabsArraySchema) {
    const [elementSchema] = this.schemaUtil.filterControls(schema.schemas);

    control.push(
      this.formUtil.createAnyControl(elementSchema, {})
    );
  }

  protected drop(control: FormArray, event: CdkDragDrop<unknown>) {
    moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
    control.updateValueAndValidity();
  }

  protected readonly helper = {
    length: {
      min: (length: TabsArraySchema['length']) => {
        return isNumber(length) ? length : length?.min ?? 0;
      },
      max: (length: TabsArraySchema['length']) => {
        return isNumber(length) ? length : length?.max ?? Infinity;
      },
    },
    addable: (addable: WithOutSchemaReactiveFn<TabsArraySchema['addable']>): AddableButton => {
      if (isUndefined(addable) || isBoolean(addable)) {
        return {
          type: 'dashed',
          icon: 'plus',
          disabled: isBoolean(addable) ? !addable : false,
        };
      }

      return addable;
    }
  } as const;

  withIndex(index: number, schema: AbstractSchema): AbstractSchema {
    return { ...schema, key: index };
  }
}
