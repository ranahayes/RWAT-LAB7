import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event/:id', component: EventDetailsComponent }
];
