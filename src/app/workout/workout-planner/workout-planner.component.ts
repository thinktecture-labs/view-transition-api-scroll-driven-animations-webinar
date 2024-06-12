import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { ExerciseChooserComponent } from '../../exercise/exercise-chooser/exercise-chooser.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workout-planner',
  standalone: true,
  templateUrl: './workout-planner.component.html',
  styleUrl: './workout-planner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiButtonModule,
    TuiIconModule,
    ExerciseChooserComponent,
    RouterLink,
  ],
})
export default class WorkoutPlannerComponent {
  public addBackClass(): void {
    document.documentElement.classList.add('back');
  }
}
