"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[980],{"./stories/fluent-form/advanced/table/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,formInTable:()=>formInTable});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),table=__webpack_require__("./stories/fluent-form/advanced/table/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/advanced/table/index.ts"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts"),storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends storybook.zW{constructor(){super(),this.name="name",this.schemas=(0,src.cr)((0,src.qH)("name"),(0,src.Rx)("age"),(0,src.J7)("address"),(0,src.ru)("info").schemas((0,src.ru)("primary").schemas((0,src.qH)("cellphone")),(0,src.ru)("secondary").schemas((0,src.qH)("cellphone")))),this.list=[{name:"John Brown",age:32,address:"New York No. 1 Lake Park",info:{primary:{cellphone:"1234567890"}}},{name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}};FluentFormWrapperComponent.ctorParameters=()=>[],FluentFormWrapperComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <nz-table #table [nzData]="list" nz-col nzFlex="2">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Age</th>\n            <th>Address</th>\n            <th>Info</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let data of table.data; index as index" [fluentForm]="schemas" [(model)]="list[index]">\n            <td>{{ index + 1 }}</td>\n            <td>\n              <fluent-control-outlet name="name"></fluent-control-outlet>\n            </td>\n            <td>\n              <fluent-control-outlet name="age"></fluent-control-outlet>\n            </td>\n            <td>\n              <fluent-control-outlet name="address"></fluent-control-outlet>\n            </td>\n            <td fluentFormName="info">\n              <ng-container fluentFormName="primary">\n                <fluent-control-outlet name="cellphone"></fluent-control-outlet>\n              </ng-container>\n              <ng-container fluentFormName="secondary">\n                <fluent-control-outlet name="cellphone"></fluent-control-outlet>\n              </ng-container>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n\n      <div nz-col nzFlex="1">\n        <pre>{{ list | json }}</pre>\n      </div>\n    </div>\n  ',styles:[table]})],FluentFormWrapperComponent);const meta=(0,storybook.lO)({component:FluentFormWrapperComponent}),story=(0,storybook.LS)(),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { Validators } from '@angular/forms';
  import { form, input } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`
      <nz-table #table [nzData]="list">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let data of table.data; index as index" [fluentForm]="schemas" [(model)]="list[index]">
            <td>{{ index + 1 }}</td>
            <td>
              <fluent-control-outlet name="name"></fluent-control-outlet>
            </td>
            <td>
              <fluent-control-outlet name="age"></fluent-control-outlet>
            </td>
            <td>
              <fluent-control-outlet name="address"></fluent-control-outlet>
            </td>
            <td fluentFormName="info">
              <ng-container fluentFormName="primary">
                <fluent-control-outlet name="cellphone"></fluent-control-outlet>
              </ng-container>
              <ng-container fluentFormName="secondary">
                <fluent-control-outlet name="cellphone"></fluent-control-outlet>
              </ng-container>
            </td>
          </tr>
        </tbody>
      </nz-table>
    \`
  })
  export class ExampleComponent {
    schemas: form(
      input('name'),
      number('age'),
      textarea('address'),
      group('info').schemas(
        group('primary').schemas(
          input('cellphone'),
        ),
        group('secondary').schemas(
          input('cellphone'),
        ),
      )
    );

    list = [
      {
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        info: {
          primary: {
            cellphone: '1234567890'
          }
        }
      },
      {
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }
    ];
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Advanced",component:meta.component,decorators:meta.decorators,argTypes:meta.argTypes,parameters:meta.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Form in Table - 表格中的表单（Experimental）"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["鉴于表格的复杂性与灵活性，",(0,jsx_runtime.jsx)(_components.code,{children:"ngx-fluent-form"})," 没有对表格进行封装，而是提供了一组指令供开发者自定义视图："]}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Form in Table",children:story})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const formInTable=(0,esm.Xb)(story);formInTable.storyName="Form in Table",formInTable.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Advanced",parameters:meta.parameters,decorators:meta.decorators,component:meta.component,argTypes:meta.argTypes,includeStories:["formInTable"]},mdxStoryNameToKey={"Form in Table":"formInTable"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["formInTable"]},"./stories/fluent-form/advanced/table/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/advanced/table/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-advanced-table-index-story-mdx.b1d64987.iframe.bundle.js.map