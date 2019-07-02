import { Component, OnInit, Input } from '@angular/core';

import { IEvent, ISession } from '../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionsListComponent implements OnInit {
 event: IEvent;
 @Input() sessions: ISession;
  constructor() { }

  ngOnInit() {
  }
}