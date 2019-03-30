import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  title = 'hn-cnode';
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    open: false
  };

  constructor() {
  }

  onOpenChange(event) {
    console.log(event);
    this.state.open = !this.state.open;
  }


  ngOnInit() {
  }

}
