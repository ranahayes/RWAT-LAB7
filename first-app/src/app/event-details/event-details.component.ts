import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article *ngIf="event">
      <img [src]="event.image" alt="Image of {{ event.name }}" />
      <h2>{{ event.name }}</h2>
      <p>Location: {{ event.location }}</p>
      <p>Date: {{ event.date }}</p>
      
      <section class="apply-section">
        <h3>Apply to Attend</h3>
        <form [formGroup]="applyForm" (ngSubmit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />

          <button type="submit">Apply Now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);
  event: Event | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.params['id']);
    this.eventService.getEventById(eventId).subscribe((data) => {
      this.event = data;
    });
  }

  submitApplication() {
    console.log('Application submitted', this.applyForm.value);
  }
}
