import { button, form, group, input, step, steps, textarea, toggle } from 'ngx-fluent-form';
import { defineStory } from 'stories/storybook';
import dedent from 'ts-dedent';

export const story = defineStory({
  args: {
    schema: form(() => {
      steps().col(24).active(0).schemas(() => {
        step().title('第一步').schemas(() => {
          input('input1InStep1').label('文本输入框').col(12);
          input('input2InStep1').label('文本输入框').col(12);
        });
        step().title('第二步').schemas(() => {
          input('inputInStep2').label('文本输入框');
          toggle('toggleInStep2').label('开关');
        });
        step().title('第三步').schemas(() => {
          group('step3').col(24).schemas(() => {
            textarea('textareaInStep3').label('文本域').col(24);
          });
          button().type('primary').mode('submit').content('提交').variants({ block: true }).col(24);
        });
      });
    }),
    model: {}
  }
});

export const source = dedent`
  import { Component } from '@angular/core';
  import { button, form, group, input, step, steps, toggle, textarea } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [(model)]="model" [schema]="schema"></fluent-form>\`
  })
  export class ExampleComponent {
    schema = form(() => {
      steps().col(24).active(0).schemas(() => {
        step().title('第一步').schemas(() => {
          input('input1InStep1').label('文本输入框').col(12);
          input('input2InStep1').label('文本输入框').col(12);
        });
        step().title('第二步').schemas(() => {
          input('inputInStep2').label('文本输入框');
          toggle('toggleInStep2').label('开关');
        });
        step().title('第三步').schemas(() => {
          group('step3').col(24).schemas(() => {
            textarea('textareaInStep3').label('文本域').col(24);
          });
          button().type('primary').mode('submit').content('提交').variants({ block: true }).col(24);
        });
      });
    });

    model = {};
  }
`;
