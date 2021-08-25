import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHerosComponent } from './top-heros.component';

describe('TopHerosComponent', () => {
  let component: TopHerosComponent;
  let fixture: ComponentFixture<TopHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
