"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[276],{"./stories/fluent-form/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$y:()=>meta,fO:()=>moduleSource,hb:()=>cmpSource});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),stories_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/storybook.ts"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends stories_storybook__WEBPACK_IMPORTED_MODULE_1__.zW{};FluentFormWrapperComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [(model)]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__]})],FluentFormWrapperComponent);const meta=(0,stories_storybook__WEBPACK_IMPORTED_MODULE_1__.lO)({component:FluentFormWrapperComponent}),moduleSource=ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  import { FluentFormModule } from 'ngx-fluent-form';

  @NgModule({
    imports: [
      FluentFormModule
    ]
  })
  export class YourModule { }
`,cmpSource=ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  import { date, form, number, text } from 'ngx-fluent-form';

  @Component({
    template: \`<fluent-form [(model)]="model" [schemas]="schemas"></fluent-form>\`
  })
  export class Component {
    schemas = form(
      text('text').label('文本'),
      number('number').label('数字').max(100),
      date('date').label('日期')
    );

    model = {
      text: 'fluent-form',
      number: 10,
      date: Date.now()
    };
  }
`},"./stories/fluent-form/advanced/form-validation/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,formValidation:()=>formValidation});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),fluent_form=__webpack_require__("./stories/fluent-form/index.ts"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");const story=(0,storybook.LS)({args:{schemas:(0,src.cr)((0,src.qH)("username").label("Username").required(!0).length({min:3,max:10}).span(12).feedback(!0).tips({auto:{default:{minlength:"Username is too short!",maxlength:"Username is too long!",required:"Please enter your username!"}}}),(0,src.qH)("email").label("Email").subtype("email").required(!0).validator([fesm2020_forms.Validators.email]).span(12).feedback(!0).tips({auto:{default:{required:"Please enter your Email!",email:"The enter is not valid E-mail!"}}}),(0,src.qH)("password").label("Password").subtype("password").required(!0).span(12).feedback(!0).tips({error:"Please enter your password!"})),model:{}}}),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { Validators } from '@angular/forms';
  import { form, input } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [(model)]="model"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas: form(
      input('username')
        .label('Username')
        .required(true)
        .length({ min: 3, max: 10 })
        .span(12)
        .feedback(true)
        .tips({
          auto: {
            default: {
              minlength: 'Username is too short!',
              maxlength: 'Username is too long!',
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
    );

    model = {};
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Advanced",component:fluent_form.$y.component,decorators:fluent_form.$y.decorators,argTypes:fluent_form.$y.argTypes,parameters:fluent_form.$y.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Form Validation - 表单验证"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["对于所有表单控件：","\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["均可使用 ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," 选项来便捷的设置控件为必填项。"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["均可使用 ",(0,jsx_runtime.jsx)(_components.code,{children:"validator"}),"、",(0,jsx_runtime.jsx)(_components.code,{children:"asyncValidator"})," 选项来添加额外的验证。"]}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["对于文本输入控件，例如 ",(0,jsx_runtime.jsx)(_components.code,{children:"input"}),"、",(0,jsx_runtime.jsx)(_components.code,{children:"textarea"})," 控件，提供了一个 ",(0,jsx_runtime.jsx)(_components.code,{children:"length"})," 选项来便捷设置输入的长度。"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["对于 ",(0,jsx_runtime.jsx)(_components.code,{children:"subtype"})," 为 ",(0,jsx_runtime.jsx)(_components.code,{children:"email"})," 的 ",(0,jsx_runtime.jsx)(_components.code,{children:"input"})," 控件，会自动添加 E-Mail 验证。"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,isExpanded:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Form Validation",children:story})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const formValidation=(0,esm.Xb)(story);formValidation.storyName="Form Validation",formValidation.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Advanced",parameters:fluent_form.$y.parameters,decorators:fluent_form.$y.decorators,component:fluent_form.$y.component,argTypes:fluent_form.$y.argTypes,includeStories:["formValidation"]},mdxStoryNameToKey={"Form Validation":"formValidation"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["formValidation"]},"./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-advanced-form-validation-index-story-mdx.113380fc.iframe.bundle.js.map