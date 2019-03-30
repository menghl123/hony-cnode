import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArticleBadgeComponent} from './article-badge/article-badge.component';

@NgModule({
  declarations: [ArticleBadgeComponent],
  imports: [
    CommonModule,
    NgZorroAntdMobileModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    NgZorroAntdMobileModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleBadgeComponent
  ]
})
export class ShareModule {
}
