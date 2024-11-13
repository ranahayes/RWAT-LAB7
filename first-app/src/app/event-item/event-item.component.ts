import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<!-- src/app/event-item/event-item.component.html -->
<div class="card">
  <img [src]="event.image" alt="Image of {{ event.name }}" />
  <div class="card-content">
    <h3>{{ event.name }}</h3>
    <p>{{ event.location }} | {{ event.date }}</p>
    <a [routerLink]="['/event', event.id]">View Details</a>
  </div>
</div>

  `,
  styleUrls: ['./event-item.component.css'] 
})
export class EventItemComponent {
  @Input() event!: { id: number, name: string, location: string, date: string, image: string };
}
