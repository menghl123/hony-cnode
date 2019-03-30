import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../core/business/article.service';

@Component({
  selector: 'app-article-list-inner',
  templateUrl: './article-list-inner.component.html',
  styleUrls: ['./article-list-inner.component.scss']
})
export class ArticleListInnerComponent implements OnInit {
  @Input()
  tab = '';

  @Input()
  page = 1;

  @Input()
  pageSize = 20;

  rows: any[] = [];
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: true
    },
    direction: 'down',
    endReachedRefresh: false,
    height: 500,
    data: [],
    directionName: 'both up and down'
  };
  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.loadData();
  }
  pullToRefresh(event) {
    if (event === 'endReachedRefresh') {
      debugger
    } else {
      if (event === 'down') {
        debugger
      } else {
        debugger
      }
    }
  }
  loadData() {
    this.articleService.getTopics(this.page, this.pageSize, this.tab).subscribe(res => {
      this.rows = res.data;
    });
  }
}
