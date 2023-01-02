import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLangComponent } from './menu-lang.component';

describe('MenuLangComponent', () => {
  let component: MenuLangComponent;
  let fixture: ComponentFixture<MenuLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
