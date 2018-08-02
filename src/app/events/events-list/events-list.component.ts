import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../../shared';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbClick(eventName) {
  }

}
