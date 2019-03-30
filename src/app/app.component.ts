import {Component} from '@angular/core';
import {hasExtra, HnHttpConfig, HnHttpExtra} from 'hn-http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    HnHttpConfig.builder()
      .baseUrl('https://cnodejs.org/api/v1')
      .addInterceptor({
        request: (req) => {
          console.log(hasExtra(req, HnHttpExtra.IGNORE_LOAD));
          console.log(hasExtra(req, HnHttpExtra.EMPTY));
          console.log(req);
        },
        response: (res) => {
          console.log(res);
        }
      });
  }


}
