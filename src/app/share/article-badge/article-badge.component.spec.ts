import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBadgeComponent } from './article-badge.component';

describe('ArticleBadgeComponent', () => {
  let component: ArticleBadgeComponent;
  let fixture: ComponentFixture<ArticleBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
