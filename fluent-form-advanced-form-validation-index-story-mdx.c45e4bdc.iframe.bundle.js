"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[276],{"./stories/fluent-form/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>meta,q:()=>source});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),stories_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/storybook.ts");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends stories_storybook__WEBPACK_IMPORTED_MODULE_1__.zW{};FluentFormWrapperComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [model]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__]})],FluentFormWrapperComponent);const meta=(0,stories_storybook__WEBPACK_IMPORTED_MODULE_1__.lO)({component:FluentFormWrapperComponent}),source=ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  import { FluentFormModule } from 'ngx-fluent-form';

  @NgModule({
    imports: [
      FluentFormModule
    ]
  })
  export class YourModule { }
`},"./stories/fluent-form/advanced/form-validation/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,formValidation:()=>formValidation});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),fluent_form=__webpack_require__("./stories/fluent-form/index.ts"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");const story=(0,storybook.LS)({args:{schemas:(0,src.cr)((0,src.qH)("username").label("Username").required(!0).span(12).feedback(!0).tips({auto:{default:{required:"Please enter your username!"}}}),(0,src.qH)("email").label("Email").subtype("email").required(!0).validator([fesm2020_forms.Validators.email]).span(12).feedback(!0).tips({auto:{default:{required:"Please enter your Email!",email:"The enter is not valid E-mail!"}}}),(0,src.qH)("password").label("Password").subtype("password").required(!0).span(12).feedback(!0).tips({error:"Please enter your password!"})),model:{}}}),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { Validators } from '@angular/forms';
  import { form, input } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [model]="model"></fluent-form>\`
  })
  export class ExampleComponent {
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
    );

    model = {};
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Advanced",component:fluent_form.$.component,decorators:fluent_form.$.decorators,argTypes:fluent_form.$.argTypes,parameters:fluent_form.$.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Form Validation"}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Form Validation",children:story})}),"\n",(0,jsx_runtime.jsx)(esm.$4,{of:src.gA})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const formValidation=(0,esm.Xb)(story);formValidation.storyName="Form Validation",formValidation.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Advanced",parameters:fluent_form.$.parameters,decorators:fluent_form.$.decorators,component:fluent_form.$.component,argTypes:fluent_form.$.argTypes,includeStories:["formValidation"]},mdxStoryNameToKey={"Form Validation":"formValidation"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["formValidation"]},"./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-advanced-form-validation-index-story-mdx.c45e4bdc.iframe.bundle.js.map