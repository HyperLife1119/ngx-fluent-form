import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SafeAny } from '@ngify/types';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FluentBindingDirective, FluentContextGuardDirective } from '../../directives';
import { CheckboxGroupControlSchema } from '../../schemas';
import { AbstractWidget, WidgetTemplateContext } from '../abstract.widget';

type CheckboxGroupWidgetTemplateContext = WidgetTemplateContext<CheckboxGroupControlSchema, FormControl<SafeAny[]>>;

/**
 * @internal
 */
@Component({
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    ReactiveFormsModule,
    NzCheckboxModule,
    FluentBindingDirective,
    FluentContextGuardDirective,
  ],
  templateUrl: './checkbox-group.widget.html',
})
export class CheckboxGroupWidget extends AbstractWidget<CheckboxGroupWidgetTemplateContext> { }
