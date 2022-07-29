"use strict";(self.webpackChunkngx_fluent_form=self.webpackChunkngx_fluent_form||[]).push([[770],{"./stories/fluent-form/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$y:()=>meta,fO:()=>moduleSource,hb:()=>cmpSource});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),stories_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/storybook.ts"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");let FluentFormWrapperComponent=class FluentFormWrapperComponent extends stories_storybook__WEBPACK_IMPORTED_MODULE_1__.zW{};FluentFormWrapperComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"fluent-form-wrapper",template:'\n    <div nz-row nzGutter="20">\n      <fluent-form\n        nz-col\n        nzFlex="2"\n        [schemas]="schemas"\n        [(model)]="model"\n        [layout]="layout"\n        [colon]="colon"\n        [spinning]="spinning"\n        [spinTip]="spinTip"\n        [spinSize]="spinSize"></fluent-form>\n      <div nz-col nzFlex="1">\n        <pre>{{ model | json }}</pre>\n      </div>\n    </div>\n  ',styles:[_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts_css_ngResource_home_runner_work_ngx_fluent_form_ngx_fluent_form_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA_3D_3D_home_runner_work_ngx_fluent_form_ngx_fluent_form_stories_fluent_form_index_ts__WEBPACK_IMPORTED_MODULE_0__]})],FluentFormWrapperComponent);const meta=(0,stories_storybook__WEBPACK_IMPORTED_MODULE_1__.lO)({component:FluentFormWrapperComponent}),moduleSource=ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
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
`},"./stories/fluent-form/basic/simple/index.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story,simple:()=>simple});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),fluent_form=__webpack_require__("./stories/fluent-form/index.ts"),src=__webpack_require__("./projects/ngx-fluent-form/src/index.ts");var storybook=__webpack_require__("./stories/storybook.ts"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");const story=(0,storybook.LS)({args:{schemas:(0,src.cr)((0,src.qH)("text").label({value:"文本输入框",tooltip:"小贴士"}).span(8).id("ipt"),(0,src.Rx)("number").label("数字输入框").span(8),(0,src.d7)().label("姓与名称").span(8).schemas((0,src.qH)("first").placeholder("姓").span(8),(0,src.qH)("last").placeholder("名").span(16)),(0,src.J7)("textarea").label("文本框").span(24),(0,src.hT)("date").label("日期录入框").span(6),(0,src.w6)("range").label("区间日期录入框").span(6),(0,src.t2)("datetime").label("日期时间录入框").span(6),(0,src.XV)("time").label("时间录入框").span(6),(0,src.Wy)("switch").label("开关").placeholder(["启用","禁用"]).value(!0).span(12),(0,src.k0)("radio").label("单选框组").options([{label:"女",value:"女"},{label:"男",value:"男"}]).span(12),(0,src.MJ)("checkbox").label("单个复选框").content("同意").span(12),(0,src.ub)("checkboxGroup").label("复选框组").options([{label:"唱跳",value:"唱跳"},{label:"Rap",value:"Rap"},{label:"篮球",value:"篮球"}]).span(12),(0,src.Ys)("select").label("选择器").options([{label:"Jack",value:"jack"},{label:"Lucy",value:"lucy"},{label:"Disabled",value:"disabled",disabled:!0}]).span(12),(0,src.Ln)("cascader").label("联级选择器").options([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",isLeaf:!0}]},{value:"ningbo",label:"Ningbo",isLeaf:!0}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",isLeaf:!0}]}]}]).span(12),(0,src.rW)("rate").label("评分").value(2.5).span(12),(0,src.$i)("slider").label("滑动条").value(30).span(12),(0,src.LI)().style("primary").content("普通按钮"),(0,src.LI)().style("primary").content("带图标的按钮").icon("check"),(0,src.LI)().content("危险按钮").danger(!0),(0,src.DN)().schemas((0,src.LI)().style("primary").content("确认"),(0,src.LI)().content("取消"),(0,src.LI)().content("看不见我").hidden((()=>!0)),(0,src.LI)().content("动态").hidden((model=>model.slider<50))),(0,src.S6)().span(24).active(0).schemas((0,src.Nb)().title("第一步").schemas((0,src.qH)("text1InStep1").label("文本输入框").placeholder("第一步的输入框").span(12),(0,src.qH)("text2InStep1").label("文本输入框").placeholder("第一步的输入框").span(12)),(0,src.Nb)().title("第二步").schemas((0,src.qH)("textInStep2").label("文本输入框").placeholder("第二步的输入框")),(0,src.Nb)().title("第三步").schemas((0,src.qH)("textInStep3").label("文本输入框").placeholder("第三步的输入框"))),(0,src.$3)().span(24).schemas((0,src.n2)().title("账号").schemas((0,src.qH)("textInTab1").label("账号").span(12)),(0,src.n2)().title("手机号").schemas((0,src.qH)("textInTab2").label("手机号")),(0,src.n2)().title("禁用").disabled(!0).schemas((0,src.qH)("textInTab3")))),model:{}}}),source=ts_dedent_esm.default`
  import { Component } from '@angular/core';
  import { button, buttonGroup, cascader, checkbox, checkboxGroup, date, datetime, form, input, inputGroup, number, radio, range, rate, select, slider, step, steps, switcher, textarea, time } from 'ngx-fluent-form';

  @Component({
    selector: 'example-component',
    template: \`<fluent-form [schemas]="schemas" [(model)]="model"></fluent-form>\`
  })
  export class ExampleComponent {
    schemas = form(
      input('text').label({ value: '文本输入框', tooltip: '小贴士' }).span(8).id('ipt'),
      number('number').label('数字输入框').span(8),
      inputGroup().label('姓与名称').span(8).schemas(
        input('first').placeholder('姓').span(8),
        input('last').placeholder('名').span(16),
      ),
      textarea('textarea').label('文本框').span(24),
      date('date').label('日期录入框').span(6),
      range('range').label('区间日期录入框').span(6),
      datetime('datetime').label('日期时间录入框').span(6),
      time('time').label('时间录入框').span(6),
      switcher('switch').label('开关').placeholder(['启用', '禁用']).value(true).span(12),
      radio('radio').label('单选框组').options(RADIO_OPTIONS).span(12),
      checkbox('checkbox').label('单个复选框').content('同意').span(12),
      checkboxGroup('checkboxGroup').label('复选框组').options(CHECKBOX_OPTIONS).span(12),
      select('select').label('选择器').options(SELECT_OPTIONS).span(12),
      cascader('cascader').label('联级选择器').options(CASCADER_OPTIONS).span(12),
      rate('rate').label('评分').value(2.5).span(12),
      slider('slider').label('滑动条').value(30).span(12),
      button().style('primary').content('普通按钮'),
      button().style('primary').content('带图标的按钮').icon('check'),
      button().content('危险按钮').danger(true),
      buttonGroup().schemas(
        button().style('primary').content('确认'),
        button().content('取消'),
        button().content('看不见我').hidden(() => true),
        button().content('动态').hidden((model: any) => model.slider < 50),
      ),
      steps().span(24).active(0).schemas(
        step().title('第一步').schemas(
          input('text1InStep1').label('文本输入框').placeholder('第一步的输入框').span(12),
          input('text2InStep1').label('文本输入框').placeholder('第一步的输入框').span(12),
        ),
        step().title('第二步').schemas(
          input('textInStep2').label('文本输入框').placeholder('第二步的输入框'),
        ),
        step().title('第三步').schemas(
          input('textInStep3').label('文本输入框').placeholder('第三步的输入框'),
        )
      )
    ),
    );

    model = {};
  }
`;function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,dist_esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h_,{title:"FluentForm/Basic",component:fluent_form.$y.component,decorators:fluent_form.$y.decorators,argTypes:fluent_form.$y.argTypes,parameters:fluent_form.$y.parameters}),"\n",(0,jsx_runtime.jsx)(_components.h1,{children:"Simple"}),"\n",(0,jsx_runtime.jsx)(esm.Xz,{withToolbar:!0,mdxSource:source,children:(0,jsx_runtime.jsx)(esm.oG,{name:"Simple",children:story})}),"\n",(0,jsx_runtime.jsx)(esm.$4,{of:src.gA})]})}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,dist_esm.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}const simple=(0,esm.Xb)(story);simple.storyName="Simple",simple.parameters={storySource:{source:"story"}};const componentMeta={title:"FluentForm/Basic",parameters:fluent_form.$y.parameters,decorators:fluent_form.$y.decorators,component:fluent_form.$y.component,argTypes:fluent_form.$y.argTypes,includeStories:["simple"]},mdxStoryNameToKey={Simple:"simple"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>react.createElement(esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react.createElement(MDXContent,null))};const index_story=componentMeta,__namedExportsOrder=["simple"]},"./stories/fluent-form/index.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBwcmUgeyBwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQ6ICNmNWY1ZjU7IGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTAgfQogIA%3D%3D!./stories/fluent-form/index.ts":module=>{module.exports="\n    pre { padding: 5px; background: #f5f5f5; border: 1px solid #e0e0e0 }\n  "}}]);
//# sourceMappingURL=fluent-form-basic-simple-index-story-mdx.90f408b3.iframe.bundle.js.map