import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../core/business/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  tabs = [
    {label: '全部', code: ''},
    {label: '精华', code: 'good'},
    {label: '分享', code: 'share'},
    {label: '问答', code: 'ask'},
    {label: '招聘', code: 'job'},
  ];
  index = 0;

  tabsData = {
    '': []
  };


  flag = true;

  onChange(item) {
    console.log(this.index)
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }

  constructor(private articleService: ArticleService) {
    this.articleService.getTopics().subscribe(res => {
      this.tabsData[''] = res.data;
    });
  }

  ngOnInit() {
  }

  loadData(page: number, tab = '') {
    this.articleService.getTopics(page, 20, tab).subscribe(res => {
      this.tabsData[''] = res.data;
    });
  }

}
