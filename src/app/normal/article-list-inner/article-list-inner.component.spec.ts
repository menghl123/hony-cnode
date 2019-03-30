import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListInnerComponent } from './article-list-inner.component';

describe('ArticleListInnerComponent', () => {
  let component: ArticleListInnerComponent;
  let fixture: ComponentFixture<ArticleListInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
