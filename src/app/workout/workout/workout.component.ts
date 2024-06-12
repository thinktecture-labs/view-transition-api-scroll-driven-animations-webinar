import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './workout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutComponent {}
