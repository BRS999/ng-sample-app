import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ToastrService } from '../../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbClick(eventName) {
    this.toastr.success(eventName);
  }

}
