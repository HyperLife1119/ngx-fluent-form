# ngx-fluent-form

Building dynamic form in Angular with Fluent API.

[![npm version](https://img.shields.io/npm/v/ngx-fluent-form/latest.svg)](https://npmjs.com/package/ngx-fluent-form)
![Node.js CI](https://github.com/HyperLife1119/ngx-fluent-form/workflows/Node.js%20CI/badge.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
[![Angular](https://img.shields.io/badge/Build%20with-Angular%20CLI-red?logo=angular)](https://www.github.com/angular/angular)
[![codecov](https://codecov.io/gh/HyperLife1119/ngx-fluent-form/branch/main/graph/badge.svg?token=070GEU44U0)](https://codecov.io/gh/HyperLife1119/ngx-fluent-form)
[![CodeFactor](https://www.codefactor.io/repository/github/hyperlife1119/ngx-fluent-form/badge)](https://www.codefactor.io/repository/github/hyperlife1119/ngx-fluent-form)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://hyperlife1119.github.io/ngx-fluent-form)
[![简体中文](https://img.shields.io/static/v1?label=简体中文&message=zh-CN&color=212121)](https://github.com/HyperLife1119/ngx-fluent-form/blob/main/README.zh-CN.md)

## Features

- Support using Fluent API and JSON.
- Type-safe form configuration.
- Built on top of Angular Reactive Forms.
- Components and grid layout based on [NG-ZORRO](https://ng.ant.design).

## Prerequisites

Before using `ngx-fluent-form`, you should have a basic understanding of the following:

- [Angular Reactive Forms](https://angular.cn/guide/reactive-forms)
- [NG-ZORRO Components](https://ng.ant.design)

And make sure your relevant dependency versions meet the following requirements:

- `angular >= v14.0.0`
- `ng-zorro-antd >= v14.0.0`

## Install

```shell
$ ng add ngx-fluent-form
```

## Docs

For documentation and examples please visit [https://hyperlife1119.github.io/ngx-fluent-form](https://hyperlife1119.github.io/ngx-fluent-form).

## Usage

`ngx-fluent-form` provides `NgModule` and [`StandaloneComponent`](https://angular.io/guide/standalone-components) respectively for you to choose to use:

- `NgModule` way：

1. Add `FluentFormModule` into your `NgModule`:

```ts
import { FluentFormModule } from 'ngx-fluent-form';

@NgModule({
  imports: [
    FluentFormModule
  ]
})
export class YourModule { }
```

2. Configure `schemas` parameter to start building form:

```ts
import { date, form, number, input } from 'ngx-fluent-form';

@Component({
  template: `<fluent-form [(model)]="model" [schemas]="schemas"></fluent-form>`
})
export class ExampleComponent {
  schemas = form(
    input('text').length(15),
    number('number').max(100),
    date('date').format('yyyy/MM/dd')
  );

  model = {
    text: 'I love ngx-fluent-form',
    number: 10,
    date: Date.now()
  };
}
```

- `StandaloneComponent` way：

1. Add `provideFluentForm` to the configuration of `bootstrapApplication`:

```ts
import { provideFluentForm, withAllWidgets } from 'ngx-fluent-form';

bootstrapApplication(RootComponent, {
  providers: [
    provideFluentForm(
      withAllWidgets()
    )
  ]
});
```

2. Add `FluentFormComponent` to your standalone component, configure the `schemas` parameter, and start building the form:

```ts
import { FluentFormComponent, date, form, number, input } from 'ngx-fluent-form';

@Component({
  standalone: true,
  imports: [FluentFormComponent],
  template: `<fluent-form [(model)]="model" [schemas]="schemas"></fluent-form>`
})
export class ExampleComponent {
  schemas = form(
    input('text').length(50),
    number('number').max(100),
    date('date').format('yyyy/MM/dd')
  );

  model = {
    text: 'I love ngx-fluent-form',
    number: 10,
    date: Date.now()
  };
}
```

## Notice

For better performance, all components of `ngx-fluent-form` run in [OnPush](https://angular.io/api/core/ChangeDetectionStrategy) mode, this means that `mutate` operations on `@Input()` data will not take effect, please use `immutable` methods to manipulate arrays or objects.

## Support

Love `ngx-fluent-form`? ⭐Star for this project!

## Special thanks

Thanks to [JetBrains](https://www.jetbrains.com/?from=ngx-fluent-form) for supporting us free open source licenses.

![JetBrains Logo (Main) logo](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)
