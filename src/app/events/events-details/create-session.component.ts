import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ISession } from '../shared';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
        @Output() saveNewSession = new EventEmitter();
        @Output() cancelAddSession = new EventEmitter();
        newSessionForm: FormGroup;
        name: FormControl;
        presenter: FormControl;
        duration: FormControl;
        level: FormControl;
        abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl ('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);
    this.newSessionForm = new FormGroup({
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract
   });

  }

  saveSession(formValue) {
      const session: ISession = {
        id: undefined,
        name: formValue.name,
        duration: +formValue.duration,
        presenter: formValue.presenter,
        level: formValue.level,
        abstract: formValue.abstract,
        voters: []
      };
      this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}
