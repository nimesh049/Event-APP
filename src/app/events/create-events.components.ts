import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    selector: 'app-create-events',
    templateUrl: './create-events.component.html'
    // styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
    newEvent;
    isDirty = true;
    constructor(private router: Router, private eventService: EventService ) {
    }

    ngOnInit() {
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = true;
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
