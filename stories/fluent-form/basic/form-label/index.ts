import { form, input } from 'ngx-fluent-form';
import { defineStory } from 'stories/storybook';
import dedent from 'ts-dedent';

export const story = defineStory({
  args: {
    schemas: form(
      input('text1')
        .label({ content: '右对齐', span: 7 })
        .col(24),

      input('text2')
        .label({ content: '附带提示', span: 7 })
        .tooltip('小贴士')
        .col(24),

      input('text3')
        .label({ content: '自定义提示图标', span: 7 })
        .tooltip({ content: '小贴士', icon: 'info-circle' })
        .col(24),
    ),
    model: {},
    layout: 'horizontal'
  }
});

export const source = dedent`
  import { Component } from '@angular/core';
  import { form, input } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [(model)]="model" layout="horizontal"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas = form(
      input('text1')
        .label({ content: '右对齐', span: 7 })
        .col(24),

      input('text2')
        .label({ content: '附带提示', span: 7 })
        .tooltip('小贴士')
        .col(24),

      input('text3')
        .label({ content: '自定义提示图标', span: 7 })
        .tooltip({ content: '小贴士', icon: 'info-circle' })
        .col(24),
    );

    model = {};
  }
`;
