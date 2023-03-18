import { inject, Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { TemplateRegistry } from '../widgets/template-registry.service';

@Pipe({
  name: 'template',
  standalone: true
})
export class FluentTemplatePipe implements PipeTransform {
  private readonly registry = inject(TemplateRegistry);

  transform(value: string): TemplateRef<unknown> {
    return this.registry.get(value);
  }

}
