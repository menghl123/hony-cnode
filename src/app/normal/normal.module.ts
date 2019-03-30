import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {ShareModule} from '../share/share.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListInnerComponent } from './article-list-inner/article-list-inner.component';

@NgModule({
  declarations: [IndexComponent, ArticleListComponent, ArticleListInnerComponent],
  imports: [
    ShareModule
  ],
  exports: [ 
    IndexComponent
  ]
})
export class NormalModule {
}
