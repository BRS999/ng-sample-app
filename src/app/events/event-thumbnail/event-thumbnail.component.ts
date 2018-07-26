import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  someProperty: any = "some string";

  constructor() { }

  ngOnInit() {
  }

  logFoo() {
    console.log('foo');
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold'}
    return {};
  }
}
