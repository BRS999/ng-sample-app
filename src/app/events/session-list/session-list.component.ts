import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../event.model';

@Component({
  selector: 'sessions-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {


  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[];

  constructor() { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter): any {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(x => x.level.toLocaleLowerCase() === filter);
    }
  }
}
