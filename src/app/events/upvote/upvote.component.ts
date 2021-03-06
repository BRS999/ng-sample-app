import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  iconColor: string;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({});
  }

}
