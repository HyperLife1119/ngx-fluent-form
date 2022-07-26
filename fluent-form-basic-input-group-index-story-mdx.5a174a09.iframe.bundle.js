"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[810],{"./stories/fluent-form/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$y:()=>meta,fO:()=>moduleSource,hb:()=>cmpSource});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),stories_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/storybook.ts"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends stories_storybook__WEBPACK_IMPORTED_MODULE_1__.zW{};FluentFormWrapperComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [(model)]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__]})],FluentFormWrapperComponent);const meta=(0,stories_storybook__WEBPACK_IMPORTED_MODULE_1__.lO)({component:FluentFormWrapperComponent}),moduleSource=ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
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
`},"./stories/fluent-form/basic/input-group/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,inputGroup:()=>inputGroup});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),fluent_form=__webpack_require__("./stories/fluent-form/index.ts"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");const story=(0,storybook.LS)({args:{schemas:(0,src.cr)((0,src.d7)().label("姓与名称").span(8).schemas((0,src.qH)("first").placeholder("姓").span(8),(0,src.qH)("last").placeholder("名").span(16)),(0,src.d7)().label("个人信息").span(8).schemas((0,src.qH)("name").placeholder("姓名").span(15),(0,src.Rx)("age").placeholder("年龄").min(1).max(100).span(9)),(0,src.d7)().span(10).schemas((0,src.qH)("keyword").subtype("search").placeholder("请输入搜索关键字").span(18),(0,src.LI)().subtype("primary").content("提交").flex("auto")),(0,src.d7)().span(6).before("@").schemas((0,src.qH)("at").placeholder("请输入")),(0,src.d7)().span(8).suffix({icon:"info-circle"}).schemas((0,src.qH)("info").placeholder("图标后缀"))),model:{}}}),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { button, form, input, inputGroup, number } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [(model)]="model"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas = form(
      inputGroup().label('姓与名称').span(8).schemas(
        input('first').placeholder('姓').span(8),
        input('last').placeholder('名').span(16),
      ),
      inputGroup().label('个人信息').span(8).schemas(
        input('name').placeholder('姓名').span(15),
        number('age').placeholder('年龄').min(1).max(100).span(9),
      ),
      inputGroup().span(10).schemas(
        input('keyword').subtype('search').placeholder('请输入搜索关键字').span(18),
        button().subtype('primary').content('提交').flex('auto'),
      ),
      inputGroup().span(6).before('@').schemas(
        input('at').placeholder('请输入'),
      ),
      inputGroup().span(8).suffix({ icon: 'info-circle' }).schemas(
        input('info').placeholder('图标后缀'),
      )
    );

    model = {};
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Basic",component:fluent_form.$y.component,decorators:fluent_form.$y.decorators,argTypes:fluent_form.$y.argTypes,parameters:fluent_form.$y.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Input Group - 输入框组合"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"输入框组合通常用于配置一些固定组合或增强当前输入框："}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"增强输入框，为其添加前后缀/标签。"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"将多个输入框或将输入框与按钮组合起来。"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,isExpanded:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Input Group",children:story})}),"\n",(0,jsx_runtime.jsx)(esm.$4,{of:src.gA})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const inputGroup=(0,esm.Xb)(story);inputGroup.storyName="Input Group",inputGroup.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Basic",parameters:fluent_form.$y.parameters,decorators:fluent_form.$y.decorators,component:fluent_form.$y.component,argTypes:fluent_form.$y.argTypes,includeStories:["inputGroup"]},mdxStoryNameToKey={"Input Group":"inputGroup"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["inputGroup"]},"./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-basic-input-group-index-story-mdx.5a174a09.iframe.bundle.js.map