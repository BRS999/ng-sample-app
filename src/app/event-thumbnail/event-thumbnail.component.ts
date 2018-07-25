import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  someProperty: any = "some string";

  constructor() { }

  ngOnInit() {
  }

  logFoo() {
    console.log('foo');
  }
}
