import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HnHttpClient, HnHttpExtra} from 'hn-http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // 主题首页
  public getTopics(page = 1, limit = 20, tab = ''): Observable<any> {
    return HnHttpClient.builder()
      .url('/topics')
      .param('page', page + '')
      .param('limit', limit + '')
      .param('tab', tab)
      .extra(HnHttpExtra.IGNORE_LOAD)
      .get<any>();
  }

}
