import { Injectable } from '@angular/core';
import { ISession } from '../events';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(v => v !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    // is or is not some element that matches that condition
    return session.voters.find(v => v === voterName);
  }
}
