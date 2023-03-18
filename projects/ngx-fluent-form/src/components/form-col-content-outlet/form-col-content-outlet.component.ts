import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AnyArray, AnyObject } from '@ngify/types';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FluentBinderDirective, FluentWithInjectorDirective } from '../../directives';
import { FluentCallPipe, FluentColumnPipe, FluentControlPipe, FluentSchemaPipe, FluentTemplatePipe } from '../../pipes';
import { AnySchema } from '../../schemas';
import { StandardSchema } from '../../schemas/types';
import { CONFIG } from '../../tokens';
import { FluentControlOutletComponent } from '../control-outlet/control-outlet.component';

interface FluentFormColContentTemplateContext<T extends AnyObject | AnyArray> {
  /** 当前控件 */
  control: AbstractControl;
  /** 当前图示 */
  schema: StandardSchema<AnySchema>;
  /** 当前模型值 */
  model: T;
}

@Component({
  selector: 'fluent-form-col-content-outlet',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgClass,
    NgStyle,
    NgSwitchDefault,
    NgTemplateOutlet,
    NzDividerModule,
    NzFormModule,
    FluentControlOutletComponent,
    FluentBinderDirective,
    FluentWithInjectorDirective,
    FluentCallPipe,
    FluentSchemaPipe,
    FluentControlPipe,
    FluentColumnPipe,
    FluentTemplatePipe
  ],
  templateUrl: './form-col-content-outlet.component.html',
  host: {
    '[style.display]': `'none'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FluentFormColContentOutletComponent<T extends AnyObject | AnyArray> implements OnInit {
  protected config = inject(CONFIG);

  @ViewChild(TemplateRef, { static: true }) templateRef!: TemplateRef<FluentFormColContentTemplateContext<T>>;

  @Input() control!: AbstractControl;
  @Input() schema!: StandardSchema<AnySchema>;
  @Input() model!: T;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this);
  }

}
