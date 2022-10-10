import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingItemComponent } from './cooking-item.component';

describe('CookingItemComponent', () => {
  let component: CookingItemComponent;
  let fixture: ComponentFixture<CookingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
