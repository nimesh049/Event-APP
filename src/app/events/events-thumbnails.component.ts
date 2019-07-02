import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'app-events-thumbnails',
  templateUrl: './events-thumbnails.component.html',
  styleUrls: ['./events-thumbnails.component.css']
})
export class EventsThumbnailsComponent implements OnInit {
  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }


}
