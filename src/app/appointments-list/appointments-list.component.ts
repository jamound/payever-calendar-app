import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
  
  appointments: Appointment[] = [
    {
      "title": "Appointment 1",
      "startDate": new Date(),
      "endDate": new Date(),
      "description": "Description 1"
    },
    {
      "title": "Appointment 1",
      "startDate": new Date(2023,3,2,10),
      "endDate": new Date(2023,3,2,11),
      "description": "Description 1"
    },
    {
      "title": "Appointment 1",
      "startDate": new Date(),
      "endDate": new Date(),
      "description": "Description 1"
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}
