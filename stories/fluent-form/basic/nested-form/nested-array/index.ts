import { array, datetime, form, group, input, radioGroup } from 'ngx-fluent-form';
import { defineStory } from 'stories/storybook';
import dedent from 'ts-dedent';

const GENDER_OPTIONS = [{ label: '女', value: '女' }, { label: '男', value: '男' }];

export const story = defineStory({
  args: {
    schema: form(() => {
      input('flight').label('航班').required(true).col(12);
      datetime('boardingTime').label('登机时间').required(true).col(12);
      array('passengers').label('乘客').length({ min: 1, max: 5 }).col(24).schemas(() => {
        group().col(12).schemas(() => {
          input('name').label('姓名').placeholder('请输入姓名').col(24);
          radioGroup('gender').label('性别').options(GENDER_OPTIONS).defaultValue('男');
        });
      });
    }),
    model: {
      passengers: [
        {
          name: '男一号',
          gender: '男'
        }
      ]
    }
  }
});

export const source = dedent`
  import { Component } from '@angular/core';
  import { array, datetime, form, group, input, radioGroup } from 'ngx-fluent-form';

  const GENDER_OPTIONS = [{ label: '女', value: '女' }, { label: '男', value: '男' }];

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [(model)]="model" [schema]="schema"></fluent-form>\`
  })
  export class ExampleComponent {
    schema = form(() => {
      input('flight').label('航班').required(true).col(12);
      datetime('boardingTime').label('登机时间').required(true).col(12);
      array('passengers').label('乘客').length({ min: 1, max: 5 }).col(24).schemas(() => {
        group().col(12).schemas(() => {
          input('name').label('姓名').placeholder('请输入姓名').col(24);
          radioGroup('gender').label('性别').options(GENDER_OPTIONS).defaultValue('男');
        });
      });
    });

    model = {
      passengers: [
        {
          name: '男一号',
          gender: '男'
        }
      ]
    };
  }
`;
