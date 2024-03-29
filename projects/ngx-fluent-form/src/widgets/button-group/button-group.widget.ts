import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FluentBindingDirective, FluentContextGuardDirective, FluentWithInjectorDirective } from '../../directives';
import { FluentWidgetTemplatePipe } from '../../pipes';
import { ButtonGroupComponentSchema } from '../../schemas';
import { AbstractWidget, WidgetTemplateContext } from '../abstract.widget';

type ButtonGroupWidgetTemplateContext = WidgetTemplateContext<ButtonGroupComponentSchema, FormGroup>;

/**
 * @internal
 */
@Component({
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgStyle,
    NgTemplateOutlet,
    NzButtonModule,
    FluentBindingDirective,
    FluentWithInjectorDirective,
    FluentContextGuardDirective,
    FluentWidgetTemplatePipe
  ],
  templateUrl: './button-group.widget.html',
})
export class ButtonGroupWidget extends AbstractWidget<ButtonGroupWidgetTemplateContext> { }
