import { button, checkbox, form, input, tab, tabset } from 'ngx-fluent-form';
import { defineStory } from 'stories/storybook';
import dedent from 'ts-dedent';

export const story = defineStory({
  args: {
    schemas: form(
      tabset().span(24).schemas(
        tab().title('用户名').schemas(
          input('username').label('用户名').span(24),
          input('password').subtype('password').label('密码').span(24),
          checkbox('remember').content('记住我'),
          button().subtype('submit').style('primary').content('立即登录').block(true).span(24)
        ),
        tab().title('手机号').schemas(
          input('cellphone').subtype('tel').label('手机号').span(24),
          input('password').subtype('password').label('密码').span(24),
          checkbox('remember').content('记住我'),
          button().subtype('submit').style('primary').content('立即登录').block(true).span(24)
        ),
      )
    ),
    model: {}
  }
});

export const source = dedent`
  import { Component } from '@angular/core';
  import { button, checkbox, form, input, tab, tabset } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [(model)]="model"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas = form(
      tabset().span(24).schemas(
        tab().title('用户名').schemas(
          input('username').label('用户名').span(24),
          input('password').subtype('password').label('密码').span(24),
          checkbox('remember').content('记住我'),
          button().subtype('submit').style('primary').content('立即登录').block(true).span(24)
        ),
        tab().title('手机号').schemas(
          input('cellphone').subtype('tel').label('手机号').span(24),
          input('password').subtype('password').label('密码').span(24),
          checkbox('remember').content('记住我'),
          button().subtype('submit').style('primary').content('立即登录').block(true).span(24)
        ),
      )
    );

    model = {};
  }
`;