import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AnyArray, AnyObject } from '@ngify/types';
import { FluentWithInjectorDirective } from '../../directives/with-injector.directive';
import { FluentTemplatePipe } from '../../pipes';
import { AnyComponentSchema, AnyControlSchema } from '../../schemas';
import { StandardSchema } from '../../schemas/types';

export interface FluentControlTemplateContext<T extends AnyObject | AnyArray> {
  /** 当前控件 */
  control: AbstractControl;
  /** 当前图示 */
  schema: AnyComponentSchema | AnyControlSchema;
  /** 当前模型值 */
  model: T;
}

@Component({
  selector: 'fluent-control-outlet',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FluentWithInjectorDirective,
    FluentTemplatePipe,
  ],
  templateUrl: './control-outlet.component.html',
  host: {
    '[style.display]': `'none'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FluentControlOutletComponent<T extends AnyObject | AnyArray> implements OnInit, FluentControlTemplateContext<T> {
  @Input() control!: AbstractControl;
  @Input() schema!: StandardSchema<AnyControlSchema | AnyComponentSchema>;
  @Input() model!: T;

  @ViewChild(TemplateRef, { static: true }) templateRef!: TemplateRef<FluentControlTemplateContext<T>>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this);
  }

}
