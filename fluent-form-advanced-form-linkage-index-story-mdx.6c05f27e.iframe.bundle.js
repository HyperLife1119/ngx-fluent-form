"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[248],{"./stories/fluent-form/advanced/form-linkage/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,formLinkage:()=>formLinkage});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),form_linkage=__webpack_require__("./stories/fluent-form/advanced/form-linkage/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/advanced/form-linkage/index.ts"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");const SELECT_OPTIONS=[{label:"Jack",value:"jack"},{label:"Lucy",value:"lucy"},{label:"Disabled",value:"disabled",disabled:!0}];let FluentFormWrapperComponent=class FluentFormWrapperComponent extends storybook.zW{constructor(){super(),this.schemas=(0,src.cr)((0,src.Ys)("select").label("控制内容").options(SELECT_OPTIONS).span(6).listener({valueChange:value=>{this.model.text=value,this.model=Object.assign({},this.model)}}),(0,src.k0)("show").label("控制显隐").span(7).value(!0).options([{label:"显示",value:!0},{label:"隐藏",value:!1}]),(0,src.Wy)("state").label("状态").span(4).placeholder(["启用","禁用"]),(0,src.qH)("text").label("文本输入框").span(6).hidden((model=>!model.show)).disabled((model=>!model.state))),this.model={}}};FluentFormWrapperComponent.ctorParameters=()=>[],FluentFormWrapperComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [(model)]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[form_linkage]})],FluentFormWrapperComponent);const meta=(0,storybook.lO)({component:FluentFormWrapperComponent}),story=(0,storybook.LS)(),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { form, input, radio, select, switcher } from 'ngx-fluent-form';

  const SELECT_OPTIONS = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'Disabled', value: 'disabled', disabled: true }
  ];

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [(model)]="model"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas = form(
      select('select').label('控制内容').options(SELECT_OPTIONS).span(6).listener({
        valueChange: value => {
          this.model.text = value;
          this.model = { ...this.model };
        }
      }),
      radio('show').label('控制显隐').span(7).value(true).options([
        { label: '显示', value: true },
        { label: '隐藏', value: false },
      ]),
      switcher('state').label('状态').span(4).placeholder(['启用', '禁用']),
      input('text')
        .label('文本输入框')
        .span(6)
        .hidden((model: { show: boolean }) => !model.show)
        .disabled((model: { state: boolean }) => !model.state),
    );

    model = {};
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Advanced",component:meta.component,decorators:meta.decorators,argTypes:meta.argTypes,parameters:meta.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Form Linkage - 表单联动"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["对于表单控件之间存在联动的，通常可以通过手动更新 ",(0,jsx_runtime.jsx)(_components.code,{children:"schemas"})," 或 ",(0,jsx_runtime.jsx)(_components.code,{children:"model"})," 参数来实现。"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["对于表单控件之间的联动隐藏/禁用的，可以使用 ",(0,jsx_runtime.jsx)(_components.code,{children:"hidden"})," 和 ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," 选项，它支持传入一个布尔值或一个函数，函数入参为当前模型值。"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,isExpanded:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Form Linkage",children:story})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const formLinkage=(0,esm.Xb)(story);formLinkage.storyName="Form Linkage",formLinkage.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Advanced",parameters:meta.parameters,decorators:meta.decorators,component:meta.component,argTypes:meta.argTypes,includeStories:["formLinkage"]},mdxStoryNameToKey={"Form Linkage":"formLinkage"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["formLinkage"]},"./stories/fluent-form/advanced/form-linkage/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/advanced/form-linkage/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-advanced-form-linkage-index-story-mdx.6c05f27e.iframe.bundle.js.map