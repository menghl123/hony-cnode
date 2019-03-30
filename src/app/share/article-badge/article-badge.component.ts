import {Component, Input, OnInit} from '@angular/core';
import {Optional} from 'hn-stream';

@Component({
  selector: 'app-article-badge',
  templateUrl: './article-badge.component.html',
  styleUrls: ['./article-badge.component.scss']
})
export class ArticleBadgeComponent implements OnInit {
  @Input()
  article: any;

  text: string;
  bgColor = '#999';

  constructor() {
  }

  ngOnInit() {
    Optional.ofNullable(this.article)
      .ifPresent(article => {
        if (article.top) {
          this.text = '置顶';
          this.bgColor = '#80bd01';
          return;
        }
        // if (article.good) {
        //   this.text = '精华';
        //   this.bgColor = '#80bd01';
        //   return;
        // }

        if (article.tab === 'share') {
          this.text = '分享';
          return;
        }

        if (article.tab === 'good') {
          this.text = '精华';
          this.bgColor = '#80bd01';
          return;
        }

        if (article.tab === 'ask') {
          this.text = '问答';
        }

        if (article.tab === 'job') {
          this.text = '招聘';
        }
      });
  }

}
