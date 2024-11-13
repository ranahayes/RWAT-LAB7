import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventItemComponent } from '../event-item/event-item.component';
import { CommonModule } from '@angular/common';
import { Event } from '../event.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventItemComponent],
  template: `
    <div class="container">
      <h1>Available Events</h1>
      <p *ngIf="!events || events.length === 0">No events available.</p>
      <app-event-item *ngFor="let event of events" [event]="event"></app-event-item>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
