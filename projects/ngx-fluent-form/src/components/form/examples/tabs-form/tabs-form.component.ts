import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { button, checkbox, FluentFormComponent, FluentGridModule, form, input, password, tab, tabs } from 'ngx-fluent-form';

@Component({
  standalone: true,
  imports: [FluentFormComponent, FluentGridModule, JsonPipe],
  templateUrl: './tabs-form.component.html'
})
export class TabsFormExampleComponent {
  schema = form(() => {
    tabs().col(12).schemas(() => {
      tab().title('用户名').schemas(() => {
        input('username').label('用户名').col(12);
        password('password').label('密码').col(12);
        checkbox('remember').content('记住我');
        button().type('primary').content('立即登录').variants({ block: true }).col(12);
      });

      tab().title('手机号').schemas(() => {
        input('cellphone').type('tel').label('手机号').col(12);
        password('password').label('密码').col(12);
        checkbox('remember').content('记住我');
        button().type('primary').content('立即登录').variants({ block: true }).col(12);
      });
    });
  });

  model = {};
}
