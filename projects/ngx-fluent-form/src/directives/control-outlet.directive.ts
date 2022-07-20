import { Directive, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ComponentTemplateRef } from '../components/fluent-template/fluent-template.component';
import { COMPONENT_TEMPLATE_REF_TOKEN } from '../providers';
import { ComponentSchema, ControlSchema } from '../schemas';

@Directive({
  selector: '[fluentControlOutlet]'
})
export class ControlOutletDirective<T extends Record<string, unknown>> implements OnInit {
  @Input('fluentControlOutlet') control!: AbstractControl;
  @Input('fluentControlOutletSchema') schema!: ControlSchema | ComponentSchema;
  @Input('fluentControlOutletModel') model!: T;

  constructor(
    @Inject(COMPONENT_TEMPLATE_REF_TOKEN)
    private componentTemplate: ComponentTemplateRef<T>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.componentTemplate, this);
  }

}
