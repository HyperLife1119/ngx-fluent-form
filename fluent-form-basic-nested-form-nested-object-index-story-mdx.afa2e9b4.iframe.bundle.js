"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[22],{"./stories/fluent-form/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$y:()=>meta,fO:()=>moduleSource,hb:()=>cmpSource});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),stories_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/storybook.ts");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends stories_storybook__WEBPACK_IMPORTED_MODULE_1__.zW{};FluentFormWrapperComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [model]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__]})],FluentFormWrapperComponent);const meta=(0,stories_storybook__WEBPACK_IMPORTED_MODULE_1__.lO)({component:FluentFormWrapperComponent}),moduleSource=ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
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
    template: \`<fluent-form [model]="model" [schemas]="schemas"></fluent-form>\`
  })
  export class Component {
    schemas = form(
      text('text').label('文本').span(6),
      number('number').label('数字').span(3).max(100),
      date('date').label('日期').span(6)
    );

    model = {
      text: 'fluent-form',
      number: 10,
      date: Date.now()
    };
  }
`},"./stories/fluent-form/basic/nested-form/nested-object/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,nestedObject:()=>nestedObject});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),fluent_form=__webpack_require__("./stories/fluent-form/index.ts"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");const story=(0,storybook.LS)({args:{schemas:(0,src.cr)((0,src.qH)("name").label("用户名").required(!0).span(24),(0,src.qH)("age").label("年龄").required(!0).span(24),(0,src.ru)("info").label("其他信息").span(24).schemas((0,src.qH)("cellphone").subtype("tel").label("手机号").span(12),(0,src.qH)("email").subtype("email").label("邮箱").span(12))),model:{}}}),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { form, group, input } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [model]="model"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas = form(
      input('name').label('用户名').required(true).span(24),
      input('age').label('年龄').required(true).span(24),
      group('info').label('其他信息').span(24).schemas(
        input('cellphone').subtype('tel').label('手机号').span(12),
        input('email').subtype('email').label('邮箱').span(12),
      )
    );

    model = {};
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Basic/Nested Form",component:fluent_form.$y.component,decorators:fluent_form.$y.decorators,argTypes:fluent_form.$y.argTypes,parameters:fluent_form.$y.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Nested Form Group - 嵌套表单组"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["可以使用 ",(0,jsx_runtime.jsx)(_components.code,{children:"group"})," 控件来配置嵌套的表单组（嵌套对象），支持多级嵌套。"]}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Nested Object",children:story})}),"\n",(0,jsx_runtime.jsx)(esm.$4,{of:src.gA})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const nestedObject=(0,esm.Xb)(story);nestedObject.storyName="Nested Object",nestedObject.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Basic/Nested Form",parameters:fluent_form.$y.parameters,decorators:fluent_form.$y.decorators,component:fluent_form.$y.component,argTypes:fluent_form.$y.argTypes,includeStories:["nestedObject"]},mdxStoryNameToKey={"Nested Object":"nestedObject"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["nestedObject"]},"./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-basic-nested-form-nested-object-index-story-mdx.afa2e9b4.iframe.bundle.js.map