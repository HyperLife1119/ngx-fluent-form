import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluentRowDirective } from './row.component';

@Component({
  standalone: true,
  imports: [FluentRowDirective],
  template: `<fluent-row [gap]="gap" [justify]="justify" [align]="align" />`,
})
class TestComponent {
  @ViewChild(FluentRowDirective, { static: true }) rowComponent!: FluentRowDirective;
  @ViewChild(FluentRowDirective, { read: ElementRef, static: true }) rowElementRef!: ElementRef<HTMLElement>;
  gap: FluentRowDirective['gap'] = 0;
  justify: FluentRowDirective['justify'];
  align: FluentRowDirective['align'];
}

describe('FluentRowComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default class', () => {
    expect(component.rowElementRef.nativeElement.classList.contains('fluent-row')).toBeTrue();
  });

  it('should be able to parse the level to gap value', () => {
    component.gap = [1, 2];
    fixture.detectChanges();
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-x')).toEqual('4px');
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-y')).toEqual('8px');

    component.gap = [3, 4];
    fixture.detectChanges();
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-x')).toEqual('16px');
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-y')).toEqual('24px');

    component.gap = [5, 6];
    fixture.detectChanges();
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-x')).toEqual('32px');
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-y')).toEqual('48px');

    component.gap = { xxl: 1 };
    fixture.detectChanges();
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-x')).toEqual('0px');
    expect(component.rowElementRef.nativeElement.style.getPropertyValue('--gap-y')).toEqual('0px');
  });

  it('should be able to parse the align and justify', () => {
    component.align = 'start';
    fixture.detectChanges();
    expect(component.rowElementRef.nativeElement.style.alignItems).toEqual('flex-start');

    component.justify = 'end';
    fixture.detectChanges();
    expect(component.rowElementRef.nativeElement.style.justifyContent).toEqual('flex-end');
  });
});
