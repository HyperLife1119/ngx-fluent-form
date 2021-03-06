import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Pipe({
  name: 'control'
})
export class ControlPipe implements PipeTransform {

  transform(value: string, container: FormGroup | FormArray): AbstractControl | null {
    // 关于为什么使用 `AbstractControl.get([name])` 而不是 `AbstractControl.get(name)` ？
    // 由于 NG 没有提供 FormArrayDirective，查阅源码后发现其实 FormGroupDirective 是兼容传入 FormArray 对象的。
    // 需要注意的就是 AbstractControl#get() 方法，由于 FormGroupDirective 原本是为 FormGroup 服务的，
    // 而 FormGroup 的控件名为字符串，AbstractControl#get() 方法的参数自然也只处理字符串类型（调用了 String#split()），
    // 但 FormArray 的控件名为数字，此时如果参数传入的是数字，就会出问题，因此这里将参数一律转为数组来绕开此问题。
    return container.get([value]);
  }

}
