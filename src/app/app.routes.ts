import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout/workout.component';
import { ExerciseChooserStore } from './exercise/exercise-chooser/signal-chooser.store';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'workout',
    component: WorkoutComponent,
    providers: [ExerciseChooserStore],
    children: [
      { path: '', redirectTo: 'planner', pathMatch: 'full' },
      {
        path: 'planner',
        loadComponent: () =>
          import('./workout/workout-planner/workout-planner.component'),
      },
      {
        path: 'exercise/:id',
        loadComponent: () =>
          import('./exercise/exercise-detail/exercise-detail.component'),
      },
    ],
  },
];
