import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared';

declare let toastr;
@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    events: IEvent[];
    _listfilter: string;

    filteredEvents: IEvent[];

    constructor(private eventService: EventService, ) {
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events;
            this.filteredEvents = events;
        });
    }
    get listfilter(): string {
        return this._listfilter;
    }
    set listfilter(value: string) {
        this._listfilter = value;
        this.filteredEvents = this.listfilter ? this.performFilter(this.listfilter) : this.events;
    }

    performFilter(filterBy: string): IEvent[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.events.filter((event: IEvent) =>
            event.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    handleToaster(eventName) {
        toastr.success('Success!', eventName);
    }

}
