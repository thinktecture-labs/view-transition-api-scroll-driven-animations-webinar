import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon, TuiButton } from '@taiga-ui/core';
import { ExerciseChooserComponent } from '../../exercise/exercise-chooser/exercise-chooser.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-workout-planner',
    templateUrl: './workout-planner.component.html',
    styleUrl: './workout-planner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TuiButton,
        TuiIcon,
        ExerciseChooserComponent,
        RouterLink,
    ]
})
export default class WorkoutPlannerComponent {
  public addBackClass(): void {
    document.documentElement.classList.add('back');
  }
}
