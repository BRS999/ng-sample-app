import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, IEvent } from '../events';
import { EventService } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  foundSessions: ISession[];
  searchTerm: string = '';
  events: IEvent[];

  constructor(public auth: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(x => this.events = x);
  }
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
