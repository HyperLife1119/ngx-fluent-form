import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { FluentFormModule, FluentGridModule, form, select } from 'ngx-fluent-form';

@Component({
  standalone: true,
  imports: [FluentFormModule, FluentGridModule, NzTagModule, JsonPipe],
  templateUrl: './select-custom-option-content.component.html'
})
export class SelectCustomOptionContentExampleComponent {
  schema = form(() => {
    select('user')
      .label('选择用户')
      .option('#optionTpl')
      .options([
        { label: 'Jack', value: 'jack' },
        { label: 'lucy', value: 'lucy' },
        { label: 'Mike', value: 'mike' },
      ])
      .col(4);
  });

  model = {};

}
