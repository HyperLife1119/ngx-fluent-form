import { Validators } from '@angular/forms';
import { FluentFormComponent, form, input } from 'ngx-fluent-form';
import { createStory } from 'stories/storybook.utils';

export const FormValidation = createStory<FluentFormComponent<{}>>({
  args: {
    schemas: form(
      input('username')
        .label('Username')
        .required(true)
        .span(12)
        .feedback(true)
        .tips({
          auto: {
            default: {
              required: 'Please enter your username!'
            }
          }
        }),
      input('email')
        .label('Email')
        .subtype('email')
        .required(true)
        .validator([Validators.email])
        .span(12)
        .feedback(true)
        .tips({
          auto: {
            default: {
              required: 'Please enter your Email!',
              email: 'The enter is not valid E-mail!',
            }
          }
        }),
      input('password')
        .label('Password')
        .subtype('password')
        .required(true)
        .span(12)
        .feedback(true)
        .tips({
          error: 'Please enter your password!'
        }),
    ),
    model: {}
  }
});