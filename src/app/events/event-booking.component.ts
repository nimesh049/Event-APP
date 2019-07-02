import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { IEvent } from './shared';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  event: IEvent;

  eventBookingForm: FormGroup;

  attendees: FormArray;

  constructor(private eventService: EventService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {

  }

  saveBooking(evt) {
    evt.preventDefault();
    if (this.eventBookingForm.invalid) {
      return false;
    }
    console.log(this.eventBookingForm.value);
  }

  cancel(evt) {
    evt.preventDefault();
    this.router.navigate(['events']);
  }

  createAttendee(): FormGroup {
    return this.fb.group({
      attendeeName: ['', Validators.required]
    });
  }

  addAttendee(): void {
    this.attendees = this.eventBookingForm.get('attendees') as FormArray;
    console.log(this.eventBookingForm.get('attendees'));
    this.attendees.push(this.createAttendee());
  }

  numberOfSeatsOnChange() {
    console.log(this.eventBookingForm.value['numberOfSeats']);
    const numberOfSeatsSelected = this.eventBookingForm.value['numberOfSeats'];
    if (numberOfSeatsSelected) {
      for (let i = (this.attendees ? this.attendees.length + 1 : 1); i <= numberOfSeatsSelected; i++) {
        this.addAttendee();
      }
      if (this.attendees && this.attendees.length > numberOfSeatsSelected) {
        console.log(this.eventBookingForm.get('attendees'));
        // this.attendees.pop(this.attendees);
        for (let i = 0; i < this.attendees.length; i = +1) {
          this.attendees.removeAt(this.attendees.length - numberOfSeatsSelected);
        }
      }
    }
  }

  ngOnInit() {
    const eventId: number = +this.route.snapshot.paramMap.get('id');
    this.event = this.eventService.getEvent(eventId);
    console.log(this.event);
    this.eventBookingForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^(.+)@(.+){2,}\\.(.+){2,}$')])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])],
      numberOfSeats: ['', Validators.required],
      attendees: this.fb.array([])
    });
  }

}
