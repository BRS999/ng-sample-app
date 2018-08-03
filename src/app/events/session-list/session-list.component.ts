import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from '../../shared/voter.serivce';

@Component({
  selector: 'sessions-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {


  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[];

  constructor(public auth: AuthService, private voterService : VoterService) { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  filterSessions(filter): any {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(x => x.level.toLocaleLowerCase() === filter);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

  toggleVote(sessions: ISession) {
    if (this.userHasVoted(sessions)) {
      this.voterService.deleteVoter(sessions, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(sessions, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }
}

export function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name)
    return 1;
  else if (s1.name === s2.name)
    return 0;
  else
    return -1;
}

export function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
