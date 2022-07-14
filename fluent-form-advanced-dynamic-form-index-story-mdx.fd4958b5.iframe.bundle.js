"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[928],{"./stories/fluent-form/advanced/dynamic-form/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,dynamicForm:()=>dynamicForm});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),dynamic_form=__webpack_require__("./stories/fluent-form/advanced/dynamic-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/advanced/dynamic-form/index.ts"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends storybook.zW{constructor(){super(),this.schemas=(0,src.cr)((0,src.IX)("passengers").span(24).schemas((0,src.qH)().label("乘客").span(12)),(0,src.DN)().schemas((0,src.LI)().subtype("primary").content("添加控件").listener({click:()=>this.add()}),(0,src.LI)().content("移除控件").listener({click:()=>this.remove()}))),this.model={}}add(){const array=(0,src.nD)(this.schemas,"passengers");array.schemas.push((0,src.qH)().label("乘客").span(12).build()),array.schemas=[...array.schemas],this.schemas=[...this.schemas]}remove(){const array=(0,src.nD)(this.schemas,"passengers");array.schemas.pop(),array.schemas=[...array.schemas],this.schemas=[...this.schemas]}};FluentFormWrapperComponent.ctorParameters=()=>[],FluentFormWrapperComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [model]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[dynamic_form]})],FluentFormWrapperComponent);const meta=(0,storybook.lO)({component:FluentFormWrapperComponent}),story=(0,storybook.LS)(),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { array, button, buttonGroup, findSchema, form, FormArraySchema, input } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`
      <fluent-form [schemas]="schemas" [model]="model"></fluent-form>
    \`
  })
  export class ExampleComponent {
    schemas = form(
      array('passengers').span(24).schemas(
        input().label('乘客').span(12),
      ),
      buttonGroup().schemas(
        button().subtype('primary').content('添加控件').listener({
          click: () => this.add()
        }),
        button().content('移除控件').listener({
          click: () => this.remove()
        }),
      )
    );

    model = {};

    add() {
      const array = findSchema<FormArraySchema>(this.schemas, 'passengers')!;
      array.schemas.push(
        input().label('乘客').span(12).build()
      );
      array.schemas = [...array.schemas];
      this.schemas = [...this.schemas];
    }

    remove() {
      const array = findSchema<FormArraySchema>(this.schemas, 'passengers')!;
      array.schemas.pop();
      array.schemas = [...array.schemas];
      this.schemas = [...this.schemas];
    }
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Advanced",component:meta.component,decorators:meta.decorators,argTypes:meta.argTypes,parameters:meta.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Dynamic Form - 动态表单"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["对于需要动态添加/移除组件的表单，可通过更新 ",(0,jsx_runtime.jsx)(_components.code,{children:"schemas"})," 参数来实现。"]}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Dynamic Form",children:story})}),"\n",(0,jsx_runtime.jsx)(esm.$4,{of:src.gA})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const dynamicForm=(0,esm.Xb)(story);dynamicForm.storyName="Dynamic Form",dynamicForm.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Advanced",parameters:meta.parameters,decorators:meta.decorators,component:meta.component,argTypes:meta.argTypes,includeStories:["dynamicForm"]},mdxStoryNameToKey={"Dynamic Form":"dynamicForm"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["dynamicForm"]},"./stories/fluent-form/advanced/dynamic-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/advanced/dynamic-form/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-advanced-dynamic-form-index-story-mdx.fd4958b5.iframe.bundle.js.map