import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MinusOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { AnyObject } from '@ngify/types';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { array, form, group, input, inputGroup } from '../../compose';
import { withAllWidgets } from '../../features';
import { provideFluentForm } from '../../provider';
import { FormGroupSchema } from '../../schemas';
import { runMicrotask } from '../../shared';
import { FluentFormDirective } from './form.directive';
import { FluentFormLayoutModule } from './module';

@Component({
  standalone: true,
  imports: [
    FluentFormLayoutModule
  ],
  template: `
    <div fluent-form [fluentSchema]="schema" [(fluentModel)]="model" (fluentFormChange)="form = $event">
      <fluent-outlet key="ipt"></fluent-outlet>
      <fluent-outlet key="ipts"></fluent-outlet>
      <fluent-outlet key="group.ipt"></fluent-outlet>
      <fluent-outlet key="group.ipts"></fluent-outlet>
      <fluent-outlet key="array"></fluent-outlet>
    </div>
  `
})
class TestComponent {
  @ViewChild(FluentFormDirective, { static: true }) fluentFormDirective!: FluentFormDirective<AnyObject>;
  form!: FormGroup;
  schema!: FormGroupSchema;
  model!: AnyObject;
}

describe('FluentFormDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NzIconModule.forRoot([
          PlusOutline,
          MinusOutline
        ])
      ],
      providers: [
        provideFluentForm(
          withAllWidgets()
        )
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('submit event', () => {
    expect(component.fluentFormDirective.onSubmit({} as SubmitEvent)).toBeFalse();
  });

  it('should be the expected model value', async () => {
    component.schema = form(() => {
      input('ipt');
      inputGroup('ipts').schemas(() => {
        input('ipt2');
      });
      group('group').schemas(() => {
        input('ipt');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
      });
      array('array').schemas(() => {
        input();
      });
    });
    component.model = {};
    fixture.detectChanges();

    await runMicrotask(() => {
      expect(component.model).toEqual({
        ipt: null,
        ipt2: null,
        group: {
          ipt: null,
          ipt2: null,
        },
        array: []
      });
    });
  });

  describe('模型应该能正确赋值表单', () => {
    it('先设置 schema，后设置 model', async () => {
      component.schema = form(() => {
        input('ipt');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
        group('group').schemas(() => {
          input('ipt');
          inputGroup('ipts').schemas(() => {
            input('ipt2');
          });
        });
        array('array').schemas(() => {
          input();
        });
      });
      component.model = {
        ipt: 'test',
        ipt2: 'test',
        group: { ipt: 'test', ipt2: 'test' },
        array: ['test']
      };
      fixture.detectChanges();

      await runMicrotask(() => {
        expect(component.model).toEqual({
          ipt: 'test',
          ipt2: 'test',
          group: {
            ipt: 'test',
            ipt2: 'test',
          },
          array: ['test']
        });
      });
    });

    it('先设置 model，后设置 schema', () => {
      component.model = {
        ipt: 'test',
        ipt2: 'test',
        group: { ipt: 'test', ipt2: 'test' },
        array: ['test']
      };
      component.schema = form(() => {
        input('ipt');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
        group('group').schemas(() => {
          input('ipt');
          inputGroup('ipts').schemas(() => {
            input('ipt2');
          });
        });
        array('array').schemas(() => {
          input();
        });
      });
      fixture.detectChanges();

      expect(component.form.value).toEqual({
        ipt: 'test',
        ipt2: 'test',
        group: {
          ipt: 'test',
          ipt2: 'test',
        },
        array: ['test']
      });
    });

    it('多次设置 model', () => {
      component.schema = form(() => {
        input('ipt');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
        group('group').schemas(() => {
          input('ipt');
          inputGroup('ipts').schemas(() => {
            input('ipt2');
          });
        });
        array('array').schemas(() => {
          input();
        });
      });
      component.model = { ipt: 'test' };
      fixture.detectChanges();

      expect(component.form.value).toEqual({
        ipt: 'test',
        ipt2: null,
        group: {
          ipt: null,
          ipt2: null,
        },
        array: []
      });

      component.model = { ipt: 'test change' };
      fixture.detectChanges();

      expect(component.form.value).toEqual({
        ipt: 'test change',
        ipt2: null,
        group: {
          ipt: null,
          ipt2: null,
        },
        array: []
      });
    });
  });

  describe('表单应该能正确赋值模型', () => {
    it('先设置 schema，后设置 model', async () => {
      component.schema = form(() => {
        input('ipt').defaultValue('test');
        inputGroup('ipts').schemas(() => {
          input('ipt2').defaultValue('test');
        });
        group('group').schemas(() => {
          input('ipt').defaultValue('test');
          inputGroup('ipts').schemas(() => {
            input('ipt2').defaultValue('test');
          });
        });
        array('array').schemas(() => {
          input().defaultValue('test');
        });
      });
      component.model = {};
      fixture.detectChanges();

      await runMicrotask(() => {
        expect(component.model).toEqual({
          ipt: 'test',
          ipt2: 'test',
          group: {
            ipt: 'test',
            ipt2: 'test',
          },
          array: []
        });
      });
    });

    it('先设置 model，后设置 schema', async () => {
      component.model = {};
      component.schema = form(() => {
        input('ipt').defaultValue('test');
        inputGroup('ipts').schemas(() => {
          input('ipt2').defaultValue('test');
        });
        group('group').schemas(() => {
          input('ipt').defaultValue('test');
          inputGroup('ipts').schemas(() => {
            input('ipt2').defaultValue('test');
          });
        });
        array('array').schemas(() => {
          input().defaultValue('test');
        });
      });
      fixture.detectChanges();

      await runMicrotask(() => {
        expect(component.model).toEqual({
          ipt: 'test',
          ipt2: 'test',
          group: {
            ipt: 'test',
            ipt2: 'test',
          },
          array: []
        });
      });
    });

    it('多次设置 schema', async () => {
      component.model = {};
      component.schema = form(() => {
        input('ipt').defaultValue('test');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
        group('group').schemas(() => {
          input('ipt');
          inputGroup('ipts').schemas(() => {
            input('ipt2');
          });
        });
        array('array').schemas(() => {
          input();
        });
      });
      fixture.detectChanges();

      await runMicrotask(() => {
        expect(component.model).toEqual({
          ipt: 'test',
          ipt2: null,
          group: {
            ipt: null,
            ipt2: null,
          },
          array: []
        });
      });

      component.schema = form(() => {
        input('ipt').defaultValue('test change');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
        group('group').schemas(() => {
          input('ipt');
          inputGroup('ipts').schemas(() => {
            input('ipt2');
          });
        });
        array('array').schemas(() => {
          input();
        });
      });
      fixture.detectChanges();

      await runMicrotask(() => {
        expect(component.model).toEqual({
          ipt: 'test',
          ipt2: null,
          group: {
            ipt: null,
            ipt2: null,
          },
          array: []
        });
      });
    });
  });

  it('should be the expected model value (configure the toplevel form)', async () => {
    component.schema = form(
      group().updateOn('blur').schemas(() => {
        input('ipt');
        inputGroup('ipts').schemas(() => {
          input('ipt2');
        });
        group('group').schemas(() => {
          input('ipt');
          inputGroup('ipts').schemas(() => {
            input('ipt2');
          });
        });
        array('array').schemas(() => {
          input();
        });
      })
    );
    component.model = {};
    fixture.detectChanges();

    await runMicrotask(() => {
      expect(component.model).toEqual({
        ipt: null,
        ipt2: null,
        group: {
          ipt: null,
          ipt2: null,
        },
        array: []
      });
    });
  });
});
