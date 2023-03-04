import { createComponent, Directive, EnvironmentInjector, Host, Injector, Input, OnChanges, OnDestroy, OnInit, SkipSelf, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FluentControlTemplateContext } from '../components';
import { FluentControlOutletComponent } from '../components/control-outlet/control-outlet.component';
import { AnyComponentSchema, AnyControlSchema } from '../schemas';
import { StandardSchema } from '../schemas/types';
import { AnyArray, AnyObject } from '../types';
import { ControlContainer } from './models/control-container';

@Directive({
  // eslint-disable-next-line
  selector: 'fluent-outlet',
  exportAs: 'fluentOutlet',
  standalone: true,
  host: {
    '[style.display]': `'none'`
  }
})
export class FluentOutletDirective<T extends AnyObject | AnyArray> implements OnInit, OnChanges, OnDestroy, FluentControlTemplateContext<T> {
  @Input() name!: string | number;
  /** @internal */
  schema!: StandardSchema<AnyComponentSchema | AnyControlSchema>;
  /** @internal */
  control!: AbstractControl;
  /** @internal */
  get model(): T {
    return this.controlContainer.directive.model as T;
  }

  constructor(
    injector: Injector,
    environmentInjector: EnvironmentInjector,
    viewContainerRef: ViewContainerRef,
    @Host() @SkipSelf()
    private controlContainer: ControlContainer<T>,
  ) {
    const { instance } = createComponent(FluentControlOutletComponent, { environmentInjector });
    viewContainerRef.createEmbeddedView(instance.templateRef, this, { injector });
  }

  ngOnInit() {
    this.controlContainer.directive.addDirective(this);
  }

  ngOnChanges() {
    this.controlContainer.directive.assignDirective(this);
  }

  ngOnDestroy() {
    this.controlContainer.directive.removeDirective(this);
  }

}
