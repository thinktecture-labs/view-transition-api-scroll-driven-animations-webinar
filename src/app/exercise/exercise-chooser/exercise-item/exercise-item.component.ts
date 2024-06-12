import { TuiChip } from "@taiga-ui/kit";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Exercise } from '../../exercise.model';
import { TuiIcon, TuiButton } from '@taiga-ui/core';
import { ViewTransitionDirective } from '../../../view-transition/view-transition.directive';

@Component({
    selector: 'app-exercise-item',
  imports: [
    TuiChipModule,
    TuiButtonModule,
    TuiIconModule,
    ViewTransitionDirective,
  ],
    templateUrl: './exercise-item.component.html',
    styleUrl: './exercise-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseItemComponent {
  public exercise = input.required<Exercise>();
  public action = output();
  public actionIcon = input<string>('@tui.plus');
}
