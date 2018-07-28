import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../event.model';

@Component({
  selector: 'sessions-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[];

  constructor() { }

  ngOnInit() {
  }

}
